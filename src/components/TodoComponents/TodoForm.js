import React from 'react';

class TodoForm  extends React.Component {
    constructor() {
        super();
        this.state = {
            item: '',
            searches: ''
        };
    }

handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

submitItem = e => {
    e.preventDefault() 
     this.props.addItem(this.state.item);
}
submitSearch = (e) => {
    e.preventDefault()
    this.props.search(this.state.searches)
}

 render() {
     return (
       <>
        <form onSubmit = {this.submitItem} className="formWrap">
         <input
         type="text"
         value={this.state.item}
         name="item"
         onChange={this.handleChanges}
         className="formInput"
        />
        <button>Add Todo</button>
        </form>
        <form onSubmit = {this.submitSearch}>
           <input 
            type="type"
            name="searches"
            value={this.state.search}
            onChange={this.handleChanges}
            className="formInput"
            />
            <button>Search</button>
        </form>
        </>
     )
 }
}



export default TodoForm