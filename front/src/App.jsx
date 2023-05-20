import './App.css';

import { BrowserRouter as  Router } from 'react-router-dom';

import Paginas from './navegation';


function App() {

  return (
    <div className="App w-screen h-screen">
      <Router>
        <Paginas />
      </Router>
    </div>
  )
}

export default App
