import MiLista from '../Lista/MiLista.js';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Form from '../Form/Form.js';
import {useState} from "react";
import Fondo from '../img/fondo.webp';
import 'bootstrap'
//Ahora App es el que tiene la informacion no Lista



//Pasa de una funcion a una clase.
function App() {
    const[incidencias, setIncidencia]= useState([
      {
        id_incidencia: 1,
        id_usuario: 'e768590345h',
        titulo: "Proyector averiado en aula 2",
        descripcion: "El proyector no enciende y la lámpara parece dañada.",
        categoria: "Hardware",
        nivel_urgencia: "Alta",
        fecha_registro: "2025-10-03",
        estado: "Abierta",
        ubicacion: "A301"
      },
      {
        id_incidencia: 2,
        id_usuario: 'e2354398025',
        titulo: "Ordenador de secretaría no enciende",
        descripcion: "El equipo no responde al presionar el botón de encendido",
        categoria: "Hardware",
        nivel_urgencia: "Media",
        fecha_registro: "2025-10-02",
        estado: "En proceso",
        ubicacion: "8205"
      },
      {
        id_incidencia: 3,
        id_usuario: 'e765849381b',
        titulo: "Impresora sin conexión",
        descripcion: "La impresora de la sala de profesores no aparece en red.",
        categoria: "Red/Impresión",
        nivel_urgencia: "Alta",
        fecha_registro: "2025-10-01",
        estado: "Resuelta",
        ubicacion: "Sala de profesores"
      }
    ])

  const agregarIncidencia = (id_nuevo, usuario_nuevo, titulo_nuevo, descripcion_nuevo, categoria_nuevo,
    nivel_urgencia_nuevo, ubicacion_nuevo
  ) => {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, 0);
    const date = String(fecha.getDate()).padStart(2, 0);
    const fechaFormateada = `${year}-${month}-${date}`;

    const nueva_incidencia = {
      id_incidencia: incidencias.length + 1,
      id_usuario: usuario_nuevo,
      titulo: titulo_nuevo,
      descripcion: descripcion_nuevo,
      categoria: categoria_nuevo,
      nivel_urgencia: nivel_urgencia_nuevo,
      fecha_registro: fechaFormateada,
      estado: "Abierta",
      ubicacion: ubicacion_nuevo
    }
    this.setState({ incidencias: [...incidencias, nueva_incidencia] });
    console.log("Nueva incidencia: ", nueva_incidencia);

  }

    return (
      <div className="card" style={{background:`url(${Fondo})`,backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        <Header />
        <h2 className='mb-4 text-center'>Mi aplicación</h2>
        <div className="container-fluid mt-4 row">
          <main className='col-md-6'>
            <p>Esta aplicacion muestra el contenido almacenado de mi app:</p>
            <MiLista incidencias={incidencias} />
          </main>
          <aside className='col-md-6'>
            <Form agregarIncidencia={agregarIncidencia} />
          </aside>
        </div>
        <Footer />
      </div>
    );
  }

export default App;

