import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    //Valores por defecto en parámetros opcionales
   //let {nombre = "Dariel", apellido = "Conde"} = useParams();

   const {nombre, apellido} = useParams();

   const navegar = useNavigate ();

   const enviar = (e) => {
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        console.log(nombre, apellido);
        let url = `/persona/${nombre}/${apellido}`;
        console.log(url);

        if (nombre.length <= 0 && apellido.length <= 0) {
            navegar("/inicio");
        }else if (nombre === "contacto"){
            navegar("/contacto");
        }else{
            navegar(url);
        }     

   }

  return (
    <div>
        {!nombre ? <h1>No hay personas que mostrar</h1> : <h1>Página de persona: {nombre} {apellido}</h1>}        
        <p>Esta es la página de Persona</p>

        <form onSubmit={enviar}>
            <input type="text" name='nombre' />
            <input type="text" name='apellido' />
            <input type="submit" name='enviar' value="Enviar"/>
        </form>
    </div>
  )
}
