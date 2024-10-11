import React from 'react';

const Task = (props) => {
    const priorityStyle = () => {
        switch (props.priority) {
          case "Low":
            return { backgroundColor: "green", color: "white", padding: "5px", borderRadius: "5px" };
          case "Medium":
            return { backgroundColor: "orange", color: "white", padding: "5px", borderRadius: "5px" };
          case "High":
            return { backgroundColor: "red", color: "white", padding: "5px", borderRadius: "5px" };
          default:
            return {};
        }
      };
    return (
       <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className='word'>{props.description}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        <p style={priorityStyle()}>{props.priority}</p>
        </div>
       
    )
}

export default Task;