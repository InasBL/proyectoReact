import React, { useState } from "react";

const API_URL = "http://localhost:3001";

function UsersForm({ alCrearUsuario }) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState("user");

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: correo,
          password: contrasena,
          role: rol,
        }),
      });
      if (respuesta.ok) {
        alert("Usuario registrado correctamente");
        setCorreo("");
        setContrasena("");
        setRol("user");
        alCrearUsuario();
      } else {
        const error = await respuesta.json();
        alert("Error: " + JSON.stringify(error));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-4">
      <h4>Añadir usuario</h4>
      <form onSubmit={manejarEnvio} className="d-flex gap-2 mt-2">
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          className="form-control"
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <select
          className="form-select"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
}

export default UsersForm;
