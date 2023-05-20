import React, { useState } from 'react';

import { CreateTask } from '../utils/CreateTask';

export default function CreateTaskForm(id) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataTask = await CreateTask(id.id, name, description, duration);
        console.log(dataTask);
        if (dataTask) {
            alert('Creacion Correcta');
            setName('');
            setDescription('');
            setDuration('');
        } else {
            alert('Error create Task');
        }
    };
    return (
        <div className=' flex items-center justify-center pb-5 border-t-2'>

            <form onSubmit={handleSubmit} className='border-4 p-10'>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Task</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <div className=" rounded-md shadow-sm ring-1 ring-inset ring-gray-300   sm:max-w-md">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}

                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Task example"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="block w-full text-gray-900 bg-white rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-000 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Describes the task.</p>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
                                    Duration
                                </label>
                                <div className="mt-2">
                                    <div className=" rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="duration"
                                            id="duration"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="1h"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}