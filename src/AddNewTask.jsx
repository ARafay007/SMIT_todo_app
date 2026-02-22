

import { useState, useRef } from "react";

const obj = {
    name: 'abc',
    age: 12,
    color: 'red'
};

const {name, age} = obj

export const AddNewTask = (props) => {
    const inputFieldRef = useRef('');
    
    const onAddTask = () => {
        const date = new Date();

        const taskObj = {
            id: date.getTime(),
            task: inputFieldRef.current.value,
            isCompleted: false,
        };
        props.setTaskListProp([...props.taskListProp, taskObj]);
    };

    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '10px'
            }}
        >
            <input 
                type="text"
                style={{
                    fontSize: '30px',
                    width: '80%'
                }}
                ref={inputFieldRef}
            />
            <button
                style={{
                    fontSize: '30px',
                    marginLeft: '10px'
                }}
                onClick={onAddTask}
            >
                Add
            </button>
        </div>
    );
};