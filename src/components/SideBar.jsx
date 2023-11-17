import React from "react";

const SideBar = ({ setCurrentImage, imagenes }) => {

    function handleClick(imagen) {
        setCurrentImage(imagen);
    }

    return (

        imagenes.map(imagen => (
            <div className="" key={imagen}>
                <img className={`rounded mx-auto d-block mt-3`} src={imagen} height='100' style={{ cursor: 'pointer' }} onClick={() => handleClick(imagen)} />
            </div>
        ))

    );
};

export default SideBar;
onst TaskList = () => {
    const [tasks, setTasks] = useState([]);
   
    const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    };
   
    return (
    <div>
    <form onSubmit={(e) => {
    e.preventDefault();
    const taskInput = e.target.elements.taskInput;
    addTask(taskInput.value);
    taskInput.value = '';
    }}
    >
    <input type="text" name="taskInput" />
    <button type="submit">Add Task</button>
    </form>
    <ul>
    {tasks.map((task, index) => (
    <li key={index}>{task}</li>
    ))}
    </ul>
    </div>
    );
   };
   
   export default TaskList;