import "./../styles/Login.css";
import { Link } from "react-router-dom";
import background from "../assets/background.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="login-container">
        <div className="login-header">
          <h2>
            Login - <span className="Title"> DevGest </span>
          </h2>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
              />

              <button
                className="show-password-btn"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
        <h5>
          Não tem conta? <Link to="/register">Registre Aqui</Link>
        </h5>
      </div>
    </div>
  );
}
