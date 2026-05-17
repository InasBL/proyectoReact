import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Login from "../Login/Login.js";
import Menu from "../Menu/Menu.js";
import Inicio from "../Inicio/Inicio.js";
import Form from "../Form/Form.js";
import UserRoleManagement from "../Users/UserRoleManagement.js";
import IncidentList from "../Lista/IncidentList.js";
import Fondo from "../img/fondo.webp";

const API_URL = "http://localhost:3001";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  const onLogin = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem("authToken", JSON.stringify(userData.accessToken));
        localStorage.setItem("usuarioLogueado", JSON.stringify(userData.user));
        setUsuarioLogueado(userData.user);
      } else {
        const errorData = await response.json();
        alert("Error login: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("usuarioLogueado");
    setUsuarioLogueado(null);
  };

  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogueado");
    if (usuario) {
      setUsuarioLogueado(JSON.parse(usuario));
    }
  }, []);

  return (
    <div>
      {!usuarioLogueado ? (
        <Login onLogin={onLogin} />
      ) : (
        <div
          style={{
            background: `url(${Fondo})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Menu onLogout={logout} usuario={usuarioLogueado} />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route
                path="/incidencias"
                element={<IncidentList usuario={usuarioLogueado} />}
              />
              <Route
                path="/registrar"
                element={<Form usuario={usuarioLogueado} />}
              />
              <Route path="/usuarios" element={<UserRoleManagement />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
