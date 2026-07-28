import "./../styles/Register.css";
import { Link } from "react-router-dom";
import background from "../assets/backgroundWhite.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  function verificarSenha() {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return false;
    }
    alert("Registro bem-sucedido!");
    return true;
  }

  return (
    <div
      className="register-page"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="register-container">
        <div className="register-header">
          <h2>
            Register - <span className="Title"> DevGest </span>
          </h2>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha: </label>
            <label htmlFor="confirmPassword">Confirme sua senha: </label>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
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

          <button
            type="submit"
            className="btn-register"
            onClick={verificarSenha}
          >
            Register
          </button>
        </form>
        <h5>
          Já tem conta? <Link to="/">Faça login aqui</Link>
        </h5>
      </div>
    </div>
  );
}
