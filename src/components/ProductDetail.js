import React from "react";
import PropTypes from "prop-types";
import faceUncharted from "../assets/faceUncharted.jpg";

function ProductDetail(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <img src={faceUncharted} />
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
