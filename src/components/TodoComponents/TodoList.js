import React from 'react';
import Todo from './Todo'


// your components will all go in this `component` directory.

// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
    render() {
        return (
            <div>
            {this.props.listItems.map((items) =>
            <Todo needDone={items.needDone} />
            )}
            </div>
        )
    }
}


export default TodoList;