//import React from "react"
import React, {useState} from "react";

function MiLista() {
  const[incidencias, setIncidencias]= useState ([{ 
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
      }])










  // state = {
  //   incidencias: [
  //     {
  //       id_incidencia: 1,
  //       id_usuario: 'e768590345h',
  //       titulo: "Proyector averiado en aula 2",
  //       descripcion: "El proyector no enciende y la lámpara parece dañada.",
  //       categoria: "Hardware",
  //       nivel_urgencia: "Alta",
  //       fecha_registro: "2025-10-03",
  //       estado: "Abierta",
  //       ubicacion: "A301"
  //     },
  //     {
  //       id_incidencia: 2,
  //       id_usuario: 'e2354398025',
  //       titulo: "Ordenador de secretaría no enciende",
  //       descripcion: "El equipo no responde al presionar el botón de encendido",
  //       categoria: "Hardware",
  //       nivel_urgencia: "Media",
  //       fecha_registro: "2025-10-02",
  //       estado: "En proceso",
  //       ubicacion: "8205"
  //     },
  //     {
  //       id_incidencia: 3,
  //       id_usuario: 'e765849381b',
  //       titulo: "Impresora sin conexión",
  //       descripcion: "La impresora de la sala de profesores no aparece en red.",
  //       categoria: "Red/Impresión",
  //       nivel_urgencia: "Alta",
  //       fecha_registro: "2025-10-01",
  //       estado: "Resuelta",
  //       ubicacion: "Sala de profesores"
  //     }
  //   ]
  // };





//  render() {      Ya noe s una clase es una funcion.
    return (
      <>
        <div clasName='lista'>
          <ul>
            {incidencias.map((i) => (
              <li key={i.id_incidencia}><strong>Título: </strong>{i.titulo}, <br></br>
                <strong>Descripción: </strong>{i.descripción}, <br></br>
                <strong>Usuario: </strong>{i.id_usuario}, <br></br>
                <strong>Ubicación: </strong>{i.ubicación},<br></br>
                <strong>Incidencias: </strong>{i.id_incidencia},<br></br>
                <strong>Titulo: </strong>{i.titulo},<br></br>
                <strong>Categoria: </strong>{i.categoria},<br></br>
                <strong>Fecha: </strong>{i.fecha_registro},<br></br>
                <strong>Estado: </strong>{i.estado}<br></br><br></br></li>
            ))}
              </ul>
        </div>
      </>
    )
  }
//}

export default MiLista;