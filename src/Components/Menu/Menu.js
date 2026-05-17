import React from "react";
import { Link } from "react-router-dom";

function Menu({ onLogout, usuario }) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div className="navbar-nav gap-2">
        <Link className="nav-link" to="/">
          Inicio
        </Link>
        <Link className="nav-link" to="/incidencias">
          Incidencias
        </Link>
        <Link className="nav-link" to="/registrar">
          Registrar
        </Link>
        {usuario?.role === "admin" && (
          <Link className="nav-link" to="/usuarios">
            Usuarios
          </Link>
        )}
      </div>
      <div className="d-flex align-items-center gap-2">
        <span className="text-secondary small">{usuario?.email}</span>
        <button className="btn btn-sm btn-outline-danger" onClick={onLogout}>
          Salir
        </button>
      </div>
    </nav>
  );
}

export default Menu;
