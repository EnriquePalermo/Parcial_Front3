import { useState } from 'react';

function Formulario({mostrarDatos}) {
    
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [nombreIngresado, setNombreIngresado] = useState(false);
    const [colorIngresado, setColorIngresado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.length < 3 || nombre.trim() !== nombre || color.length<6) {
            setMensajeError('Por favor chequea que la información sea correcta');
            return;
          }


        mostrarDatos(nombre, color);
        setNombre("");
        setColor("");
        setNombreIngresado(true);
        setColorIngresado(true);
        setMensajeError("");

}
return (

<div>
<h2>Formulario:</h2>
<form onSubmit={handleSubmit}>
      <label>
          <input type="text" 
          placeholder="Ingresa tu nombre aquí" 
          value={nombre} 
          onChange={(e) => setNombre (e.target.value)}
          disabled={nombreIngresado}
          />
      </label>
      <br />
      <br />
      <label>
          <input type="text" 
          placeholder="Ingrese un color aquí" 
          value={color} 
          onChange={(e) => setColor (e.target.value)}
          disabled={colorIngresado}
           />
        </label>
        <br />
        <br />
        <button type="submit" disabled={colorIngresado} >Enviar</button>
        </form>
        {mensajeError && <p className="error">{mensajeError}</p>}

</div>

);
}

export default Formulario;