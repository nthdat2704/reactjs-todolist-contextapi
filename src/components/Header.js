import React,{useContext} from 'react'
import {ThemeContext} from '../components/contexts/ThemeContext';
import {AuthContext} from '../components/contexts/AuthContext';
const Header = () => {
    //load context theme
    const {theme} = useContext(ThemeContext);
    const {dark,light,isLightTheme} = theme;
    const style = isLightTheme ? light : dark;
    //load context login
    const {isAuthenticated,toggleLogin} = useContext(AuthContext);

    return (
        <div className="navbar" style={style}>
            <h1>My App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? "Bạn đã đăng nhập" : ""}
                    <button onClick={toggleLogin}>{isAuthenticated ? "Logout" : "Login"}</button>
                 </li>
            </ul>
            
        </div>
    )
}

export default Header
