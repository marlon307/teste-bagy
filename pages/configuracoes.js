import React from 'react';
import Svg from '../assets/Svg';
import style from '../styles/style.module.scss';

function configuracoes() {
  return (
    <div className={ style.pgs }>
      <h1>Configurações</h1>
      <Svg nameSvg="config" />
    </div>
  );
}

export default configuracoes;
