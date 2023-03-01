import React, { useState, useEffect } from 'react';
import Task from './Task';


function Tasks() {


    const [taskList, setTask]= useState([]);
    
    async function getUsers (){
        const response = await fetch ("https://api.github.com/users");
        const taskList = await response.json();
        setTask(taskList);
        console.log(taskList);
    }

    useEffect(() => {
        getUsers();
    }, []);



// function statusChange(id){
//     const updateTasks= [...taskList];
//     updateTasks.forEach((task) => {
//         if (task.id === id){
//             task.completed = true;
//         }
//     });
//     setTask(updateTasks);
// }

// function deleteTask(id){
//     setTask(taskList.filter((item) => item.id !== id));
// }

    const tasks = taskList.map( (task) => {
        return (
            <Task
            key={task.id}
            id={task.id}
            name={task.login}
            text={task.title}
            status={task.completed}
            url={task.avatar_url}
            // statusChange={statusChange}
            // deleteTask={deleteTask}
            />
        )
    })


    return (
        <div class= "row">
            {tasks}</div>
    )
};

export default Tasks;