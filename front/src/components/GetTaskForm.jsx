import { useEffect, useState } from "react"
import { GetTask } from "../utils/GetTask"
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";


export default function GetTaskForm({ id, onChildTask }) {
    const [task, setTask] = useState([]);
    useEffect(() => {
        GetTask(id).then(data => {
            console.log(data, 'dataaaaaaaaaa');
            setTask(data.data.task)
        });
    }, []);
    const handleClick = (num) => {
        // Emitir evento al hacer clic en el componente hijo
        onChildTask(num);
    };


    return (
        <ul role="list" className="divide-y divide-gray-100 bg-white px-40 border-t-2">
            {task.map((item) => (
                <li key={item.email} className="flex justify-around gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.description}</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <div>
                            <button onClick={() => handleClick({num:3,item: item})} className="mt-1 text-xs leading-5 mr-1">
                                <FaRegEdit />
                            </button>
                            <button onClick={() => handleClick({num:4,item: item._id})} className="mt-1 text-xs leading-5 ">
                                <FaRegTrashAlt />
                            </button>
                        </div>

                        <p className="text-sm leading-6 text-gray-900">{item.duration}</p>

                    </div>
                </li>
            ))}
        </ul>
    )
}