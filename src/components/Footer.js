import React from "react";
import LogoFooter from "../assets/logo1.png";

function Footer(props) {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="boxFooter">
          {" "}
          <p> Todos los derechos reservados ©</p>
          <a href="#" className="logo foter">
            {" "}
            <img className="logo foter" src={LogoFooter} alt="" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
