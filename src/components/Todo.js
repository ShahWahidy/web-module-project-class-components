import React from 'react';

class ToDo extends React.Component{
    
     handleClick = () => {
            this.props.handleToggleTask(this.props.task);
          }

    render(){
        return (
                <div onClick={this.handleClick} className={`task${this.props.task.completed ? ' completed' : ''}`}>
                  <p>{this.props.task.name}</p>
                </div>
              );
    }
}



// const Todo = props => {
//   const handleClick = () => {
//     props.handleToggleTask(props.task);
//   }

//   return (
//     <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
//       <p>{props.task.name}</p>
//     </div>
//   );
// };

export default ToDo;