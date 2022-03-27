import React from 'react';
import Link from 'next/link';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

function Nav() {
  return (
    <nav className={ style.nav }>
      <div className={ style.logo }>
        <Svg nameSvg="logo" />
        <div>
          <h2>
            Dashboard
          </h2>
          <h2>Bagy</h2>
        </div>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Svg nameSvg="vision" />
              { ' ' }
              Visão Geral
            </a>
          </Link>
        </li>
        <li>
          <Link href="/loja">
            <a>
              <Svg nameSvg="store" />
              { ' ' }
              Lojas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/vendas">
            <a>
              <Svg nameSvg="sales" />
              { ' ' }
              Vendas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/clientes">
            <a>
              <Svg nameSvg="clients" />
              { ' ' }
              Clientes
            </a>
          </Link>
        </li>
        <li>
          <Link href="/produtos">
            <a>
              <Svg nameSvg="products" />
              { ' ' }
              Produtos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/metas">
            <a>
              <Svg nameSvg="plans" />
              { ' ' }
              Planos e Metas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/configuracoes">
            <a>
              <Svg nameSvg="config" />
              { ' ' }
              Configurações
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sair">
            <a>
              <Svg nameSvg="exit" />
              { ' ' }
              Sair
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
