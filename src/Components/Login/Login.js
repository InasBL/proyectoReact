import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="contenedorLogin">
      <form className="formularioLogin" onSubmit={manejarEnvio}>
        <h2 className="tituloLogin">Iniciar sesión</h2>

        <label className="etiquetaLogin">Correo</label>
        <input
          className="campoLogin"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@correo.correo"
        />

        <label className="etiquetaLogin">Contraseña</label>
        <input
          className="campoLogin"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />

        <button className="botonLogin" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
