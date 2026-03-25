import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Borrow from './pages/Borrow'

export default function App() {
  return (
    <BrowserRouter basename="/borrowed">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
      </Routes>
    </BrowserRouter>
  )
}