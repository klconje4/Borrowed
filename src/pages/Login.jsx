import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

const logo = '/borrowed/borrowed no bg.png'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="Borrowed logo" className="login-logo" />
        <h1 className="login-title">Borrowed</h1>
        <p className="login-subtitle">Borrow and share with your community</p>

        <div className="login-form">
          <input type="text" placeholder="Email or Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-btn-primary" onClick={() => navigate('/home')}>
            LOG IN
          </button>
          <div className="login-or">or</div>
          <button className="login-btn-secondary">
            CREATE NEW ACCOUNT
          </button>
        </div>
      </div>
    </div>
  )
}