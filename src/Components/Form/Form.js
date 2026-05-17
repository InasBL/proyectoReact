import React, { useState } from "react";
import './Form.css';

const API_URL = "http://localhost:3001";

function Form({ usuario }) {
  const [mensaje, setMensaje] = useState("");

  const envioFormulario = async (event) => {
    event.preventDefault();
    const form = event.target;
    const nueva = {
      id_usuario: usuario?.email,
      titulo: form.titulo.value,
      descripcion: form.descripcion.value,
      categoria: form.categoria.value,
      nivel_urgencia: form.urgencia.value,
      fecha_registro: new Date().toISOString().split("T")[0],
      estado: "Abierta",
      ubicacion: form.ubicacion.value,
    };
    try {
      const res = await fetch(`${API_URL}/incidencias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nueva),
      });
      if (res.ok) {
        setMensaje("Incidencia registrada correctamente.");
        event.target.reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Registrar incidencia</h2>
      {mensaje && <div className="alert alert-success">{mensaje}</div>}
      <form onSubmit={envioFormulario}>
        <div>
          <label className="mb-3 form-label">Titulo Incidencia</label>
          <input className="mb-3 form-control" type="text" name="titulo" placeholder="Introduce el titulo" required />
        </div>
        <div>
          <label className="mb-3 form-label">Usuario</label>
          <input className="mb-3 form-control" type="text" value={usuario?.email || ""} readOnly />
        </div>
        <div>
          <label className="mb-3 form-label">Descripcion</label>
          <input className="mb-3 form-control" type="text" name="descripcion" required />
        </div>
        <div>
          <label className="mb-3 form-label">Categoria</label>
          <select className="mb-3 form-control" name="categoria" required>
            <option value="">Seleccionar...</option>
            <option>Hardware</option>
            <option>Software</option>
            <option>Red y accesos</option>
            <option>Infraestructura</option>
          </select>
        </div>
        <div>
          <label className="mb-3 form-label">Nivel de urgencia</label>
          <select className="mb-3 form-control" name="urgencia" required>
            <option value="">Seleccionar...</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>
        <div>
          <label className="mb-3 form-label">Ubicacion</label>
          <input className="mb-3 form-control" type="text" name="ubicacion" required />
        </div>
        <div>
          <button type="submit" className="btn btn-success">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
