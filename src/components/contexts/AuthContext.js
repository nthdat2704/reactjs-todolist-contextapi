import React,{createContext,useState,useEffect} from 'react'
export const AuthContext = createContext();
const AuthContextProvider = ({children}) =>{
    // state
    const [isAuthenticated,setAuthenticate] = useState(false);
    const toggleLogin = () =>{
        setAuthenticate(!isAuthenticated);
    }
    //useEffect
    useEffect(()=>{
        alert(isAuthenticated ? "Login thành công" : "Vui lòng login");

    })

    // context data
    const AuthContextData = {
        isAuthenticated,
        toggleLogin
    }
    return (
        <AuthContext.Provider value={AuthContextData}>{children}</AuthContext.Provider>
    )
}
export default AuthContextProvider;