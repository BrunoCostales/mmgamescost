import React from "react";
import Logo from "../assets/logo1.png";
function Navi() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid ">
        <a className="navbar-brand ">
          <img className="logo" src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="#">
                My Mad Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Crea tu cuenta
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active">Acceder </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-3 barra"
              type="search"
              placeholder="¿Qué estas buscando?"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navi;
