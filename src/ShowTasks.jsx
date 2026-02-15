

export const ShowTasks = () => {

    return (
        <div 
            style={{
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div 
                style={{
                    width: '95%',
                    display: 'flex',
                    justifyContent: 'center',
                    borderBottom: '0.5px solid #c0c0c0'
                }}
            >
                <p
                    style={{
                        width: '75%',
                    }}
                >
                    abcahsdkjqwkje
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
                        color: 'red',
                    }}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};