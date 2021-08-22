import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import "./TodaysTasks.scss";

const TodaysTasks = (props) => {
    
    const {
        handleTaskChange = () => {},
        todaysTasks = ["task1", "task2", "task3"]
    } = props;
    return (
        <div className="todays-task-container">
            <div className="header">Today's Task</div>
            <div className="tasks-container">
                {
                    todaysTasks.map((task, index) => {
                        return (
                            <div className="task" key={index}>
                                <FormControlLabel
                                    className="form-control-label"
                                    control={<Checkbox color="primary" />}
                                    label={task}
                                >
                                </FormControlLabel>
                            </div>
                        );                        
                    })
                }
            </div>
        </div>
    );
};

export default TodaysTasks;