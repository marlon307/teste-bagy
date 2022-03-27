import React from 'react';
import Svg from '../assets/Svg';
import style from '../styles/style.module.scss';

function loja() {
  return (
    <div className={ style.pgs }>
      <h1>Lojas</h1>
      <Svg nameSvg="store" />
    </div>
  );
}

export default loja;
