import React from 'react';



const Todo = props =>  {
 
        return (
            <div
            className={`item${props.item.completed ? ' completed' : ''}`}
             onClick = {() => props.toggleItem(props.item.id)}
            >
            {/* item comes from mapping of props on todolist */}
            <div className="todoWrap">
            <p className="task">{props.item.task}</p>
            </div>
            </div>
        )
}

export default Todo;