import React, { useState, useEffect } from "react";
import UsersForm from "./UsersForm";

const API_URL = "http://localhost:3001";

function UserRoleManagement() {
  const [usuarios, setUsuarios] = useState([]);

  const cargarUsuarios = () => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    fetch(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((datos) => setUsuarios(datos))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cambiarRol = async (idUsuario, rolActual) => {
    const nuevoRol = rolActual === "admin" ? "user" : "admin";
    const token = JSON.parse(localStorage.getItem("authToken"));
    await fetch(`${API_URL}/users/${idUsuario}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ role: nuevoRol }),
    });
    cargarUsuarios();
  };

  return (
    <div className="mt-4">
      <h2 className="mb-3">Gestión de usuarios y roles</h2>
      <ul className="list-group">
        {usuarios.map((usuario) => (
          <li
            key={usuario.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {usuario.email}{" "}
              <span className={`badge bg-secondary`}>
                {usuario.role || "user"}
              </span>
            </span>
            <button
              className="btn btn-sm btn-outline-warning"
              onClick={() => cambiarRol(usuario.id, usuario.role)}
            >
              Cambiar rol
            </button>
          </li>
        ))}
      </ul>
      <UsersForm alCrearUsuario={cargarUsuarios} />
    </div>
  );
}

export default UserRoleManagement;
