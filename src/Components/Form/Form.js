import React from "react";
import './Form.css'
import { useState } from "react";


function Form(props) {
    const envioForumulario = (event) => {
        //Permite que no se recarge entera la pagina.
        event.preventDefault();
        const form = event.target;
        props.agregarIncidencia(form.id_incidencia.value, form.usuario.value, form.titulo.value,
            form.descripcion.value, form.categoria.value, form.urgencia.value, form.ubicacion.value);
    }
    return (
        <div>
            <h2>Registrar incidencias</h2>
            <form onSubmit={envioForumulario}>

                <div>
                    <label className="mb-3 form-label">Titulo Incidencia</label>
                    <input className="mb-3 form-control" type="text" nmae="titulo" placeholder="Introduce el titulo" required></input><br></br>
                </div>

                <div>
                    <label className="mb-3 form-label">Usuario</label>
                    <input className="mb-3 form-control" type="text" nmae="usuario" placeholder="Introduce el titulo" required></input><br></br>
                </div>


                <div>
                    <label className="mb-3 form-label"> Descripcion </label>
                    <input className="mb-3 form-control" type="text" name="descripcion" required />
                </div>

                <div>
                    <label className="mb-3 form-label"> Categoria </label>
                    <select className="mb-3 form-control" type="text" name="categoria" required>
                        <option value="">Seleccionar...</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>red y accesos</option>
                        <option>Infraestructura</option>
                    </select>
                </div>

                <div>
                    <label className="mb-3 form-label"> Nivel de urgencia </label>
                    <select className="mb-3 form-control" type="text" name="urgencia" required>
                        <option value="">Seleccionar...</option>
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                    </select>
                </div>

                {/* <div className="elemento-form">
                        <label>Fecha registro </label>
                        <input type="text" name="fecha" required />
                    </div>

                     <div className="elemento-form">
                        <label> Estado </label>
                        <select type="text" name="estado" required>
                            <option value="">Seleccionar...</option>
                            <option>En curso</option>
                            <option>Abierta</option>
                            <option>Resuelta</option>
                            <option>Cerrada</option>
                        </select>
                    </div> */}

                <div>
                    <label className="mb-3 form-label">Ubicacion</label>
                    <input className="mb-3 form-control" type="text" name="ubicacion" required />
                </div>

                <div>
                    <button type="submit" className="btn  btn-success mx-auto d.grid ">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;