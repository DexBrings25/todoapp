import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Home from './pages/Home'
import Register from './pages/Register'
import UserDashboard from './pages/user/Dashboard'
import UserTodos from './pages/user/TodoList'
import UserGroups from './pages/user/GroupList'
import UserProfile from './pages/user/Profile'
import AdminTodos from './pages/admin/TodoList'
import AdminComments from './pages/admin/CommentList'
import AdminGroups from './pages/admin/GroupList'
import AdminUsers from './pages/admin/UserList'

function App() {
  
  return (
    <>
      <div>
       <Router>
       <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
           <Navbar.Brand href="/">Todo-App</Navbar.Brand>
           <Navbar.Toggle aria-controls='basic-navbar-nav' />
           <Navbar.Collapse>
             <Nav className='me-auto'>
               <Nav.Link href='/'>Home</Nav.Link>
               <Nav.Link href='/register'>Registrierung</Nav.Link>
               <NavDropdown title="Benutzer" id='basic-nav-dropdown'>
                 <NavDropdown.Item href='/user/dashboard'>Dashboard</NavDropdown.Item>
                 <NavDropdown.Item href='/user/todos'>Todo-Tabelle</NavDropdown.Item>
                 <NavDropdown.Item href='/user/groups'>Meine Gruppen</NavDropdown.Item>
                 <NavDropdown.Item href='/user/users'>Mein Profil</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Admin" id='basic-nav-dropdown'>
                 <NavDropdown.Item href='/admin/todos'>Todo-Tabelle</NavDropdown.Item>
                 <NavDropdown.Item href='/admin/comments'>Kommentar-Tabelle</NavDropdown.Item>
                 <NavDropdown.Item href='/admin/groups'>Gruppen-Tabellen</NavDropdown.Item>
                 <NavDropdown.Item href='/admin/users'>Benutzer-Tabelle</NavDropdown.Item>
               </NavDropdown>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
          
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="register" element={<Register />} />
         <Route path="/user/dashboard" element={<UserDashboard />} />
         <Route path="/user/todos" element={<UserTodos />} />
         <Route path="/user/groups" element={<UserGroups />} />
         <Route path="/user/users" element={<UserProfile />} />
         <Route path="/admin/todos" element={<AdminTodos />} />
         <Route path="/admin/comments" element={<AdminComments />} />
         <Route path="/admin/groups" element={<AdminGroups />} />
         <Route path="/admin/users" element={<AdminUsers />} />
       </Routes>
      </Router>
	   </div>
    </>
  )
}

export default App
