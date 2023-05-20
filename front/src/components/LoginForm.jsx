
import React, { useState } from 'react';
import { login } from "../utils/Login"
import { useNavigate } from 'react-router-dom';
import { setToken } from '../api/Client';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  localStorage.clear();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataLogin = await login(email, password);
    console.log(dataLogin.data);
    if (dataLogin.data) {

      localStorage.setItem('myData', JSON.stringify(dataLogin.data.data));
      setToken(dataLogin.data.data.id);
      navigate("/container");
    } else {
      alert('User o password invalid');
    }
  };


  return (
    <div className="flex items-center justify-center my-60  " >
      <div className="bg-gray-100 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Inicio de sesión</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500 ">
          Not a member?
          <a href='/singUp' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;