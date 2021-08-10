import React,{useState,useContext} from 'react'
import TodoItem from '../components/TodoItem'
import TodoForm from '../components/TodoForm'
import {TodoContext} from '../components/contexts/TodoContext'
import {AuthContext} from '../components/contexts/AuthContext';

const Todos = () => {

    //load context
    const {todoState} = useContext(TodoContext);
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div className="todo-list">

            <TodoForm />

            {isAuthenticated ? (<ul>
                {
                    todoState.map(todo =>(
                        <TodoItem todo={todo} key={todo.id}/>
                    ))
                }
            </ul>) : (<p style= {{textAlign:'center'}}>Bạn chưa login</p>)}
            

            
        </div>
    )
}

export default Todos
