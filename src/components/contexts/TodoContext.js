import React,{createContext,useState,useEffect, useReducer,} from 'react'
import {todoReducer} from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/type';
export const TodoContext = createContext();
const TodoContextProvider = ({children}) =>{

    //State
    const [todoState,dispatch] = useReducer(todoReducer,[]);
    console.log(dispatch);

    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null
        })
     
    },[])
    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: {
                todos:todoState
            }
        })
        console.log("effetc 2");
    },[todoState])

    // //function to add items
    // const addTodo = todo =>{
    //     setTodoState([...todoState,todo])
      
   
    // }
    // const removeTodo = id =>{
    //     const newTodo = todoState.filter(todo=>{
    //         return todo.id!==id
    //     })
    //     setTodoState(newTodo)
    // }


    //ContextData
    const TodoContextData = {
        todoState,
        dispatch
        // addTodo,
        // removeTodo
    }
    return (
        <TodoContext.Provider value={TodoContextData}>{children}</TodoContext.Provider>
    )
}
export default TodoContextProvider;