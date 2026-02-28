

import { useState } from "react"
import { AddNewTask } from "./AddNewTask"
import { ShowTasks } from "./ShowTasks"

function App() {
  const [taskList, setTaskList] = useState([]);
  
  console.log(taskList);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '600px',
          height: '600px',
          boxShadow: '0px 0px 5px 0.1px #676767',
          borderRadius: '6px'
        }}
      >
        <AddNewTask taskListProp={taskList} setTaskListProp={setTaskList} />
        <ShowTasks taskListProp={taskList} setTaskListProp={setTaskList} />
      </div>
    </div>
  )
}

export default App
