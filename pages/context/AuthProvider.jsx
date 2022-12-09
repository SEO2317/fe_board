import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

	const [auth, setAuth] = useState(localStorage.getItem("nickName"));

	const value = {auth, setAuth };

	return (
		<AuthContext.Provider value = {value}>
			{children}
		</AuthContext.Provider>
	);

}

export default AuthProvider;