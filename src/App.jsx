import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function Placeholder({ name }) {
  return <div style={{ padding: '2rem' }}><h1>{name}</h1></div>
}

export default function App() {
  return (
    <BrowserRouter basename="/Borrowed">
      <Navbar />
      <Routes>
        <Route path="/" element={<Placeholder name="Home" />} />
        <Route path="/borrow" element={<Placeholder name="Borrow" />} />
        <Route path="/sell" element={<Placeholder name="Sell" />} />
        <Route path="/messages" element={<Placeholder name="Messages" />} />
        <Route path="/profile" element={<Placeholder name="Profile" />} />
      </Routes>
    </BrowserRouter>
  )
}