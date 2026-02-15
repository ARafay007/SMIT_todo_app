

import { useState, useRef } from "react";

export const AddNewTask = (props) => {
    const inputFieldRef = useRef('');
    
    const onAddTask = () => {
        console.log(inputFieldRef.current.value);

        props.setTaskListProp(inputFieldRef.current.value);
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