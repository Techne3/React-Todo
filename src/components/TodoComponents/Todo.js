import React from 'react';



class Todo extends React.Component {
    render( ) {
        return (
            <ul>{this.props.needDone}</ul>
        )
    }
}

export default Todo;