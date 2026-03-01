

import { useState } from "react";

export const EditTask = (props) => {
    const [taskValue, setTaskValue] = useState(props.taskObj.task);

    const onInputChange = (event) => {
        setTaskValue(event.target.value);
    }

    const onUpdateTask = () => {
        const taskObjClone = structuredClone(props.taskObj);
        
        taskObjClone.task = taskValue;
        taskObjClone.isEditMode = false;

        props.updateTaskValue(taskObjClone);
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
                value={taskValue}
                onChange={onInputChange}
            />
            <button
                style={{
                    fontSize: '30px',
                    marginLeft: '10px'
                }}
                onClick={onUpdateTask}
            >
                Save
            </button>
        </div>
    );
};