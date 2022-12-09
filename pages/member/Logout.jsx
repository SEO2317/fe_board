// import { useEffect, useContext } from "react";
// import { useNavigate } from "react-router";
// import { AuthContext } from "../context/AuthProvider";

// const Logout = () => {

// 	const { auth, setAuth } = useContext(AuthContext);

// 	const navigate = useNavigate();
	
// 	const logout = () => {
		
// 		localStorage.removeItem("board_access_token");
// 		localStorage.removeItem("nickName");

// 		alert(auth + "님, 로그아웃 성공! 🔒");
// 		setAuth(null);
		
// 		navigate("/");
// 	};

// 	useEffect(() => {
// 		logout();
// 	}, []);

// }

// export default Logout;