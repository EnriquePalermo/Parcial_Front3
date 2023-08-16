import { useState } from 'react';

function Formulario({mostrarDatos}) {
    
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.length < 3 || nombre.trim() !== nombre || color.length<6) {
            setMensajeError('Por favor chequea que la información sea correcta');
            return;
          }


        mostrarDatos(nombre, color);
        setNombre("");
        setColor("");
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
          />
      </label>
      <br />
      <br />
      <label>
          <input type="text" 
          placeholder="Ingrese un color aquí" 
          value={color} 
          onChange={(e) => setColor (e.target.value)}
           />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
        </form>
        {mensajeError && <p className="error">{mensajeError}</p>}

</div>

);
}

export default Formulario;