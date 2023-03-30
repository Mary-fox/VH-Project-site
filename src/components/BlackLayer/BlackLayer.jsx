import React from 'react';
import "./BlackLayer.scss"

function BlackLayer(props) {
  const { showPopup } = props;

  return (
    <div
      className={`black-layer ${showPopup? 'black-layer--open' : ''}`}
      onClick={props.onClose}
    />
  );
}

export default BlackLayer;
