import React from 'react';
import Link from 'next/link';
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
          <Link href="/">
            <a>
              <Svg nameSvg="store" />
              { ' ' }
              Lojas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Svg nameSvg="sales" />
              { ' ' }
              Vendas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Svg nameSvg="clients" />
              { ' ' }
              Clientes
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Svg nameSvg="products" />
              { ' ' }
              Produtos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Svg nameSvg="plans" />
              { ' ' }
              Planos e Metas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Svg nameSvg="config" />
              { ' ' }
              Configurações
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
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
