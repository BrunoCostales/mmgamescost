import React from "react";
import gow from "../assets/CarruselGOW.jfif";
import wukong from "../assets/Wukong.jpg";
import granturismo from "../assets/Granturismo.jfif";
import Carousel from "react-bootstrap/Carousel";
function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={gow} alt="First slide" />
        <Carousel.Caption>
          <h3>God Of war Ragnarok</h3>
          <p>Sumergete en la mitologia nordica por parte de Kratos y Loki</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={wukong} alt="Second slide" />

        <Carousel.Caption>
          <h3>Black Myth: Wukong</h3>
          <p>La leyenda oriental mas esperada del momento</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={granturismo} alt="Third slide" />

        <Carousel.Caption>
          <h3>Gran turismo 7</h3>
          <p>
            Una saga emblematica que viene a explorar los limites de la
            plataforma
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
