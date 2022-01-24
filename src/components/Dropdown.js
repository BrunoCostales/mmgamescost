import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";

function Dropdownn() {
  return (
    <div className="dropfull">
      <Dropdown>
        <Dropdown.Toggle variant="dark" size="lg" id="dropdown-basic">
          Categorias
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Accion</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Aventura</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Arcade</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Carrera</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Deportes</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Estrategia</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Musicales</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Multijugador</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Trending</Dropdown.Item>
          <Dropdown.Item href="#/action-1">PC</Dropdown.Item>
          <Dropdown.Item href="#/action-2">PS</Dropdown.Item>
          <Dropdown.Item href="#/action-3">XBOX</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Dropdownn;
