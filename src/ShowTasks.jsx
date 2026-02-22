
import './ShowTask.css';

export const ShowTasks = (props) => {

    const onTaskComplete = (id) => {
        const taskListClone = structuredClone(props.taskListProp);

        const updatedTaskList = taskListClone.map((el) => {
            if(el.id === id){
                el.isCompleted = true;
            }
            return el;
        });

        props.setTaskListProp(updatedTaskList);
    };

    const onRemoveTask = (id) => {
        const taskListClone = structuredClone(props.taskListProp);

        const updatedTaskList = taskListClone.filter((el) => {
            if(el.id !== id){
                return el;
            }
        });

        props.setTaskListProp(updatedTaskList);
    };

    return (
        <div 
            style={{
                paddingTop: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            {
                props.taskListProp.map((el, index) => {
                    return (
                        <div
                            style={{
                                width: '95%',
                                display: 'flex',
                                justifyContent: 'center',
                                borderBottom: '0.5px solid #c0c0c0'
                            }}

                            key={el.id}
                        >
                            {/* <p style={{width: '75%', fontSize: '25px' }} >
                                {
                                    el.isCompleted === true ? <s>{el.task}</s> : el.task
                                }
                            </p> */}

                            <p 
                                style={{width: '75%', fontSize: '25px' }} 
                                className={el.isCompleted === true ? "task_completed" : "" } >
                                {el.task}
                            </p>
                            <button
                                style={{
                                    border: '1px solid #676767',
                                    borderRadius: '7px',
                                    height: '40px',
                                    marginRight: '5px',
                                }}
                                onClick={() => {onTaskComplete(el.id)}}
                            >
                                Done
                            </button>
                            <button
                                style={{
                                    border: '1px solid #676767',
                                    borderRadius: '7px',
                                    height: '40px',
                                    color: 'green',
                                    marginRight: '5px',
                                }}
                            >
                                Edit
                            </button>
                            <button
                                style={{
                                    border: '1px solid #676767',
                                    borderRadius: '7px',
                                    height: '40px',
                                    color: 'red',
                                }}
                                onClick={() => {onRemoveTask(el.id)}}
                            >
                                Remove
                            </button>
                        </div>
                    )
                })
            }
            <div
                style={{
                    width: '95%',
                    display: 'flex',
                    justifyContent: 'center',
                    borderBottom: '0.5px solid #c0c0c0'
                }}
            >
                <input 
                type="text"
                style={{
                    fontSize: '30px',
                    width: '80%'
                }}
            />
            <button
                style={{
                    fontSize: '30px',
                    marginLeft: '10px'
                }}
            >
                Done
            </button>
            </div>
        </div>
    );
};