import "./login.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FarMart</h3>
          <span className="loginDesc">
            Experience an improved way to connect with your local farmers.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link to='/register'>
                Create a New Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login