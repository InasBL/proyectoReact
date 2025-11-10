import React from "react";
import './Form.css'


class Form extends React.Component {
 envioForumulario =(event)=>{
    //Permite que no se recarge entera la pagina.
    event.preventDefault();
    const form=event.target;
    this.props.agregarIncidencia(form.id_incidencia.value, form.usuario.value, form.titulo.value,
        form.descripcion.value, form.categoria.value,form.urgencia.value, form.ubicacion.value);
 }

    render() {
        return (
            <div>
                <h2>Registrar incidencias</h2>
                <form onSubmit={this.envioForumulario}>

                    <div className="elemento-form">
                        <label> Id Incidencia </label>
                        <input type="text" name="id_incidencia" placebolder="Ej:  1,2,3..." required />
                    </div>

                    <div className="elemento-form">
                        <label> Titulo </label>
                        <input type="text" name="titulo" placebolder="Ej:  No funciona raton del ordenador" required />
                    </div>

                    <div className="elemento-form">
                        <label> Usuario </label>
                        <input type="text" name="usuario" placebolder="Ej:  1e78234989234" required />
                    </div>

                    <div className="elemento-form">
                        <label> Descripcion </label>
                        <input type="text" name="descripcion" required />
                    </div>

                    <div className="elemento-form">
                        <label> Categoria </label>
                        <select type="text" name="categoria" required>
                            <option value="">Seleccionar...</option>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>red y accesos</option>
                            <option>Infraestructura</option>
                        </select>
                    </div>

                    <div className="elemento-form">
                        <label> Nivel de urgencia </label>
                        <select type="text" name="urgencia" required>
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

                     <div className="elemento-form">
                        <label>Ubicacion</label>
                        <input type="text" name="ubicacion" required />
                    </div>

                    <div className="elemento-form-boton">
                        <button>Registrar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;