import react,{useContext,useState} from 'react';
import { ThemeContext } from './contexts/ThemeContext';
const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <div className="toggle-btn">
            <button type="button" onClick={toggleTheme}>Đổi chế độ màu</button>
        </div>
    )
}
export default ThemeToggle
