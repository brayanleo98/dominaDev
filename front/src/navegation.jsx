import React from 'react'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import SingUpForm from './components/SingUpForm';
import Header from './components/Header';
import GetTaskForm from './components/GetTaskForm';
import CreateTaskForm from './components/CreateTaskForm';
import UpdateTaskForm from './components/UpdateTaskForm';
import DeleteTaskForm from './components/DeleteTaskForm';
import Container from './components/Container';

const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path='/login' element={<LoginForm />} />
                <Route path='/singUp' element={<SingUpForm />} />

                <Route path='/container' element={<Container />} />
                <Route path='/header' element={<Header />} />
                <Route path='/getTask' element={<GetTaskForm />} />
                <Route path='/createTask' element={<CreateTaskForm />} />
                <Route path='/updateTask' element={<UpdateTaskForm />} />
                <Route path='/deleteTask' element={<DeleteTaskForm />} />


            </Routes>
        </section>
    )
}

export default Paginas