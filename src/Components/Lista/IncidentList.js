import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:3001";

function IncidentList({ usuario }) {
  const [incidencias, setIncidencias] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/incidencias`)
      .then((res) => res.json())
      .then((data) => setIncidencias(data))
      .catch((err) => console.error(err));
  }, []);

  const cerrarIncidencia = async (id) => {
    await fetch(`${API_URL}/incidencias/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: "Cerrada" }),
    });
    setIncidencias((prev) =>
      prev.map((i) => (i.id === id ? { ...i, estado: "Cerrada" } : i)),
    );
  };

  return (
    <div className="mt-4">
      <h2>Listado de incidencias</h2>
      <ul className="list-group mt-3">
        {incidencias.map((i) => (
          <li key={i.id} className="list-group-item">
            <strong>{i.titulo}</strong> — {i.descripcion}
            <div className="mt-1 text-muted small">
              {i.categoria} · {i.nivel_urgencia} · {i.ubicacion} · {i.fecha_registro} · {i.estado}
            </div>
            {usuario?.role === "admin" && i.estado !== "Cerrada" && (
              <button
                className="btn btn-sm btn-danger mt-2"
                onClick={() => cerrarIncidencia(i.id)}
              >
                Cerrar incidencia
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentList;
