import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'
import  '../src/components/TodoComponents/Todo.css'
import TodoForm from './components/TodoComponents/TodoForm'


const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todo: todoData
    };   
  }

  toggleItem = (id) => {


    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed:!item.completed
          }
        }else {
          return item;
        }
      })
    })
  };

 addItem = (taskName) => {
   const newItem ={
      task: taskName,
      id: Date.now(),
      completed: false,
   }

   this.setState({
     todo: [...this.state.todo, newItem]
   })
 }

 clearCompleted = () => {
   this.setState({
     todo: this.state.todo.filter(item =>  !item.completed)
   })
 }

 search = props => {
   this.setState({
     todo: this.state.todo.filter(item => 
      item.task.toLowerCase().includes(props)
      )
   })
 }


  render() {
    return (
      <div>
        <h2 className="welcome">Welcome to your Todo App!</h2>
        <TodoList  todos={this.state.todo} 
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
        <TodoForm addItem={this.addItem}
        search={this.search}
        />
      </div>
    );
  }
}

export default App;
