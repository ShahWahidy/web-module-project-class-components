import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
   constructor(){
    super();
    this.state ={
      tasks: tasks
    }
  }

  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item => {
        return !item.completed;
      })
    })
  }

  handleAddTask = (taskName) => {
    const newTask ={
      name:taskName,
      id: Date.now(),
      completed: false
    }
    
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  }

  handleToggleTask = (taskId) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(task => {
        if(task.id === taskId.id) {
          return({
            ...task,
            completed: !task.completed
          })
        } else {
          return task;
        }
        
      })
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm handleAddTask={this.handleAddTask}/>
        <ToDoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks} />
        <button onClick={this.handleClearCompleted}className="clear-btn">Clear Completed</button>
      </div>
    );
  }
}

export default App;
