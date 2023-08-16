

function Card({datos}) {
  return (
    <div>
      <h2>Hola {datos.nombre}! </h2>
      <p>
        Sabemos que tu color favorito es: {datos.color}
      </p>
    </div>
  );
}

export default Card;