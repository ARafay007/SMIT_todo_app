

export const ShowTasks = (props) => {

    console.log(props.taskListProp);

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

                            key={index}
                        >
                            <p style={{width: '75%' }} >
                                {el}
                            </p>
                            <button
                                style={{
                                    border: '1px solid #676767',
                                    borderRadius: '7px',
                                    height: '40px',
                                    marginRight: '5px',
                                }}
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
                            >
                                Remove
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
};