// /* 로그인 컴포넌트 */

// import axios from "axios";
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router";
// import { AuthContext } from "../context/AuthProvider";
// import { HttpHeadersContext } from "../context/HttpHeadersProvider";

// const Login = () => {

// 	const { auth, setAuth } = useContext(AuthContext);
// 	const { headers, setHeaders } = useContext(HttpHeadersContext);

// 	const navigate = useNavigate();

// 	const [nickName, setNickName] = useState("");
// 	const [pwd, setPwd] = useState("");

// 	const changeNickName = (event) => {
// 		setNickName(event.target.value);
// 	}

// 	const changePwd = (event) => {
// 		setPwd(event.target.value);
// 	}

// 	const login = async () => {

// 		const req = {
// 			nickName: nickName,
// 			pwd: pwd
// 		}

// 		await axios.post("http://localhost:3000/Posts/member/Login", req)
// 		.then((resp) => {
// 			console.log("[Login.js] login() success :D");
// 			console.log(resp.data);

// 				alert(resp.data.nickName + "님, 로그인 성공! 🔐");

// 				// JWT 토큰 저장
// 				localStorage.setItem("board_access_token", resp.data.jwt);
// 				localStorage.setItem("nickName", resp.data.nickName);

// 				setAuth(resp.data.nickName); // 사용자 인증 정보(아이디 저장)
// 				setHeaders({"Authorization": `Bearer ${resp.data.jwt}`}); // 헤더 Authorization 필드 저장

// 				navigate("/boardlist");
			

// 		}).catch((err) => {
// 			console.log("[Login.js] login() error :<");
// 			console.log(err);

// 			alert("⚠️ " + err.response.data);
// 		});
// 	}

// 	return (
// 		<div>
// 			<table className="table">
// 				<tbody>
// 					<tr>
// 						<th className="col-3">NickName</th>
// 						<td>
// 							<input type="text" value={nickName} onChange={changeNickName} size="50px" />
// 						</td>
// 					</tr>

// 					<tr>
// 						<th>Password</th>
// 						<td>
// 							<input type="password" value={pwd} onChange={changePwd} size="50px" />
// 						</td>
// 					</tr>
// 				</tbody>
// 			</table><br />

// 			<div className="my-1 d-flex justify-content-center">
// 				<button className="btn btn-outline-secondary" onClick={login}><i className="fas fa-sign-in-alt"></i> Login</button>
// 			</div>

// 		</div>
// 	);
// }

// export default Login;