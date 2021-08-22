import { Button, TextareaAutosize, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import "./TomorrowsTasks.scss";

export const TomorrowsTasks = () => {
    const [tasks, setTasks] = useState(["test1", "test2", "test3"]);
    const [newTask, setNewTask] = useState();

    const handleTaskInput = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    return (
        <div className="tomorrows-tasks-container">
            <div className="header">Tomorrow's Tasks</div>
            <div className="added-tasks">
                {
                    tasks.map((task, index) => <div className="task" key={index}>{task}</div>)
                }
            </div>
            <TextareaAutosize 
                className="task-input" 
                minRows={3} 
                onChange={handleTaskInput} 
                value={newTask}
                placeholder="Add new task"
            />
            <Button 
                color="primary" 
                variant="contained" 
                onClick={addTask} 
                disabled={!newTask}
            >Add</Button>
        </div>
    )
}
