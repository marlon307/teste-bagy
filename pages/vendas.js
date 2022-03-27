import React from 'react';
import Svg from '../assets/Svg';
import style from '../styles/style.module.scss';

function vendas() {
  return (
    <div className={ style.pgs }>
      <h1>Vendas</h1>
      <Svg nameSvg="sales" />
    </div>
  );
}

export default vendas;
