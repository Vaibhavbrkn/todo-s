import React  from 'react';

const Todos = ({todos , deleteTodo})=> {
    
    const todolist = todos.map((todo)=>
        {
            return(
                <div className = "collection-item" key = {todo.id}>
                    <span onClick = {()=> deleteTodo(todo.id)}>{todo.text}</span>
                    
                </div>
            )
        })
    return(
        <div className= 'todo collection'>
            {todolist}
        </div>
    )
    
}

export default Todos;