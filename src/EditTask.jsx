

import { useState } from "react";

export const EditTask = (props) => {
    const [taskValue, setTaskValue] = useState(props.taskObj.task);

    const onUpdateTask = (event) => {
        setTaskValue(event.target.value);
    }

    const editTask = () => {
        props.editTaskProp(props.taskObj, taskValue);
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
                onChange={onUpdateTask}
            />
            <button
                style={{
                    fontSize: '30px',
                    marginLeft: '10px'
                }}
                onClick={editTask}
            >
                Save
            </button>
        </div>
    );
};