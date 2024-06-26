
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import "./style.scss"
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

function App() {
  const { currentUser } = useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/'></Route>
        <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        />
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
