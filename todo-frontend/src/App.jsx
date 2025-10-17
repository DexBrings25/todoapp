import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  
  return (
    <>
      <div>
	  	  <h1>ToDo-App</h1>
        <Router>
          <nav>
            <Link to="/">Start/Login</Link> | <Link to="/register">Registrierung</Link>
          </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Routes>
       </Router>
	  </div>
    </>
  )
}

export default App
