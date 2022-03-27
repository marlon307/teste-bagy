import React from 'react';
import Svg from '../assets/Svg';
import style from '../styles/style.module.scss';

function sair() {
  return (
    <div className={ style.pgs }>
      <h1>Sair</h1>
      <Svg nameSvg="exit" />
    </div>
  );
}

export default sair;
