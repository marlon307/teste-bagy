import React from 'react';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

function Nav() {
  return (
    <nav className={ style.nav }>
      <div>
        <Svg nameSvg="logoBagy" />
        <h2>
          sd
        </h2>
      </div>
      <ul>
        <li>Lojas</li>
        <li>Vendas</li>
        <li>Clientes</li>
        <li>Produtos</li>
        <li>Planos e Metas</li>
        <li>Configuraçõe Sair</li>
      </ul>
    </nav>
  );
}

export default Nav;
