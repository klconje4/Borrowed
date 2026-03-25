import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Borrowed/borrowed no bg.png" alt="Borrowed logo" />
        <span>Borrowed</span>
      </div>
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/borrow">Borrow</NavLink>
        <NavLink to="/sell">Sell</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  )
}