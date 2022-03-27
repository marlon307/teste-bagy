import React from 'react';
import Svg from '../assets/Svg';
import style from '../styles/style.module.scss';

function clientes() {
  return (
    <div className={ style.pgs }>
      <h1>Clientes</h1>
      <Svg nameSvg="clients" />
    </div>
  );
}

export default clientes;
