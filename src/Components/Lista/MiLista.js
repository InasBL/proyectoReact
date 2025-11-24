import React from "react"
import Header from "../Header/Header";
//import React, {useState} from "react";
import Form from "../Form/Form.css";
function MiLista(props) {

  return (
    <>
      <div clasName='mb-4 pb-2 border-bottom'>
        <dl>
          {props.incidencias.map((i) => (
            <li key={i.id_incidencia}>
              <dt className="text-titulopersonalizado-naranja"><strong>Título: </strong>{i.titulo} <br></br></dt>
              <dd className="text-muted"><strong>Descripción: </strong>{i.descripción}, <br></br> </dd>
              <dd><strong>Usuario: </strong>{i.id_usuario} <br></br></dd>
              <dd><strong>Ubicación: </strong>{i.ubicación}<br></br></dd>
              <dd><strong>Incidencias: </strong>{i.id_incidencia}<br></br></dd>
              <dd><strong>Titulo: </strong>{i.titulo}<br></br></dd>
              <dd><strong>Categoria: </strong>{i.categoria}<br></br></dd>
              <dd><strong>Fecha: </strong>{i.fecha_registro}<br></br></dd>
              <dd><strong>Estado: </strong>{i.estado}<br></br><br></br></dd>
            </li>
          ))}
        </dl>
      </div>
    </>
  )
}
//}

export default MiLista; 