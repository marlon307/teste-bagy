import React from 'react';
import Svg from '../assets/Svg';
import style from '../styles/style.module.scss';

function produtos() {
  return (
    <div className={ style.pgs }>
      <h1>Produtos</h1>
      <Svg nameSvg="products" />
    </div>
  );
}

export default produtos;
