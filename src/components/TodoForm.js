import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from './contexts/ThemeContext';
import {TodoContext} from '../components/contexts/TodoContext'
import { ADD_TODO } from './reducers/type';

const TodoForm = () => {
    //load context
    const {dispatch} = useContext(TodoContext);
    
    const [titleState, setTitleState] = useState("");
    const onTitleChange = event => {
        setTitleState(event.target.value);
    }
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({
            type: ADD_TODO,
            payload:{
                todo:{
                    id: uuidv4(),
                    title: titleState
                }
            }
        })
        setTitleState("")

    }
    const {theme} = useContext(ThemeContext);
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light : dark;




    return (
        <form style={style} onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="title" 
            placeholder="Công việc cần làm" 
            onChange={onTitleChange} 
            value={titleState} />
            <input type="submit" value="Thêm" />
        </form>
    )
}

export default TodoForm
