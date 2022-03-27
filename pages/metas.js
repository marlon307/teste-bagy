import React from 'react';
import Svg from '../assets/Svg';
import style from '../styles/style.module.scss';

function metas() {
  return (
    <div className={ style.pgs }>
      <h1>Planos e Metas</h1>
      <Svg nameSvg="plans" />
    </div>
  );
}

export default metas;
