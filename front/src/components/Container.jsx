import { useState } from "react";
import GetTaskForm from "./GetTaskForm";
import Header from "./Header";
import CreateTaskForm from "./CreateTaskForm";
import UpdateTaskForm from "./UpdateTaskForm";
import DeleteTaskForm from "./DeleteTaskForm";

export default function Container() {
    const storedData = JSON.parse(localStorage.getItem('myData'));
    console.log(storedData);
    const [num, setNum] = useState(0);
    const [task, setTask] = useState(0);
    const handleChildClick = async (num) => {
        console.log(num);
        setNum(num);
    };

    const handleChildClickTask = async (data) => {
        console.log(data);
        setNum(data.num);
        setTask(data.item);
    };
    const showActionComponent = () => {
        switch (num) {
            case 1: return <GetTaskForm id={storedData.id} onChildTask={handleChildClickTask} />
            case 2: return <CreateTaskForm id={storedData.id} />
            case 3: return <UpdateTaskForm dataTaskInput={task} />
            case 4: return <DeleteTaskForm id={task}/>
        }
    }


    return (
        <>
            <Header onChildClick={handleChildClick} />
            <div className="bg-white ">
                {showActionComponent()}
            </div >
        </>
    )
}