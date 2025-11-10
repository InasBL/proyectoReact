import React from "react"
//import React, {useState} from "react";

function MiLista(props) {

    return (
      <>
        <div clasName='lista'>
          <ul>
            {props.incidencias.map((i) => (
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