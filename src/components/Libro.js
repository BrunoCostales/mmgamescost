import React from "react";
import faceUncharted from "../assets/faceUncharted.jpg";
import Col from "react-bootstrap/Col";

function Libro() {
  const uncharted = "Uncharted 4 El final del Ladron";
  const pagina = [
    {
      imagen: faceUncharted,
      nombre: uncharted,
      precio: 500,
    },
    {
      imagen: faceUncharted,
      nombre: uncharted,
      precio: 500,
    },
    {
      imagen: faceUncharted,
      nombre: uncharted,
      precio: 500,
    },
    {
      imagen: faceUncharted,
      nombre: uncharted,
      precio: 500,
    },
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {pagina.map((element, key) => {
            return (
              <Col className="padding20">
                <a href="#" className="aSinborder">
                  {" "}
                  <img src={element.imagen} className="tarjeta" alt="..." />
                  <h5 className="nombre">{element.nombre}</h5>
                </a>
                <h6 className="precio">
                  <span className="span">
                    <button className="agregar">
                      {" "}
                      Comprar por $ {element.precio}
                    </button>
                    <button className="compra">Agregar al carrito</button>
                  </span>
                </h6>
                <hr />
              </Col>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Libro;
