import React from 'react';
import { Col } from "react-bootstrap";

export const EquipoCard = ({ title, description, description2, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={3}>
      <div className="equ-imgbx">
        <img src={imgUrl} />
        <div className="equ-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{description2}</p>
        </div>
      </div>
    </Col>
  )
}
