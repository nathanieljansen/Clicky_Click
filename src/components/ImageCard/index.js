import React from "react";
import "./image.css";

const Image = props => (
  <div className="card">
    <div className="img-container" dataid={props.id} onClick={(e) => {
      e.preventDefault()
      props.handleClick(props.id)}}
    >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Image;