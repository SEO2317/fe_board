// /* 회원가입 컴포넌트 */

// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router";

// const Join = () => {

// 	const [nickName, setNickName] = useState("");
// 	const [pwd, setPwd] = useState("");
// 	const [checkPwd, setCheckPwd] = useState("");

// 	const navigate = useNavigate();

// 	const changeNickName = (event) => {
// 		setNickName(event.target.value);
// 	}

// 	// const changeName = (event) => {
// 	// 	setName(event.target.value);
// 	// }

// 	const changePwd = (event) => {
// 		setPwd(event.target.value);
// 	}

// 	const changeCheckPwd = (event) => {
// 		setCheckPwd(event.target.value);
// 	}

// 	// const changeEmail = (event) => {
// 	// 	setEmail(event.target.value);
// 	// }

// 	/* 아이디 중복 체크 */
// 	const checkNickNameDuplicate = async () => {

// 		await axios.get("http://localhost:3000/user", { params: { nickName: nickName } })
// 			.then((resp) => {
// 				console.log("[Join.js] checkNickNameDuplicate() success :D");
// 				console.log(resp.data);

// 				if (resp.status == 200) {
// 					alert("사용 가능한 별명입니다.");
// 				}
				
// 			})
// 			.catch((err) => {
// 				console.log("[Join.js] checkNickNameDuplicate() error :<");
// 				console.log(err);

// 				const resp = err.response;
// 				if (resp.status == 400) {
// 					alert(resp.data);
// 				}
// 			});

// 	}

// 	/* 회원가입 */
// 	const join = async () => {

// 		const req = {
// 			nickName: nickName,
// 			pwd: pwd,
// 			checkPwd: checkPwd,
// 		}

// 		await axios.post("http://localhost:3000/user/join", req)
// 			.then((resp) => {
// 				console.log("[Join.js] join() success :D");
// 				console.log(resp.data);

// 				alert(resp.data.nickName + "님 회원가입을 축하드립니다 🎊");
// 				navigate("/login");

// 			}).catch((err) => {
// 				console.log("[Join.js] join() error :<");
// 				console.log(err);

// 				// alert(err.response.data);

// 				const resp = err.response;
// 				if (resp.status == 400) {
// 					alert(resp.data);
// 				}
// 			});
// 	}


// 	return (
// 		<div>
// 			<table className="table">
// 				<tbody>
// 					<tr>
// 						<th className="col-2">Nickname</th>
// 						<td>
// 							<input type="text" value={nickName} onChange={changeNickName} size="50px" /> &nbsp; &nbsp;
// 							<button className="btn btn-outline-danger" onClick={checkNickNameDuplicate}><i className="fas fa-check"></i> Check Nickname</button>
// 						</td>
// 					</tr>

// 					<tr>
// 						<th>Password</th>
// 						<td>
// 							<input type="password" value={pwd} onChange={changePwd} size="50px" />
// 						</td>
// 					</tr>

// 					<tr>
// 						<th>Check Password</th>
// 						<td>
// 							<input type="password" value={checkPwd} onChange={changeCheckPwd} size="50px" />
// 						</td>
// 					</tr>
// 				</tbody>
// 			</table><br />

// 			<div className="my-3 d-flex justify-content-center">
// 				<button className="btn btn-outline-secondary" onClick={join}><i className="fas fa-user-plus"></i> Join</button>
// 			</div>

// 		</div>
// 	);
// }

// export default Join;