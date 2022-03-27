import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

function Nav() {
  const router = useRouter();
  const [pathName, setPathName] = useState([]);
  useEffect(() => {
    setPathName(router.pathname);
  }, [router]);

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
        <li data-active={ pathName === '/' }>
          <Link href="/">
            <a>
              <Svg nameSvg="vision" />
              { ' ' }
              Visão Geral
            </a>
          </Link>
        </li>
        <li data-active={ pathName === '/loja' }>
          <Link href="/loja">
            <a>
              <Svg nameSvg="store" />
              { ' ' }
              Lojas
            </a>
          </Link>
        </li>
        <li data-active={ pathName === '/vendas' }>
          <Link href="/vendas">
            <a>
              <Svg nameSvg="sales" />
              { ' ' }
              Vendas
            </a>
          </Link>
        </li>
        <li data-active={ pathName === '/clientes' }>
          <Link href="/clientes">
            <a>
              <Svg nameSvg="clients" />
              { ' ' }
              Clientes
            </a>
          </Link>
        </li>
        <li data-active={ pathName === '/produtos' }>
          <Link href="/produtos">
            <a>
              <Svg nameSvg="products" />
              { ' ' }
              Produtos
            </a>
          </Link>
        </li>
        <li data-active={ pathName === '/metas' }>
          <Link href="/metas">
            <a>
              <Svg nameSvg="plans" />
              { ' ' }
              Planos e Metas
            </a>
          </Link>
        </li>
        <li data-active={ pathName === '/configuracoes' }>
          <Link href="/configuracoes">
            <a>
              <Svg nameSvg="config" />
              { ' ' }
              Configurações
            </a>
          </Link>
        </li>
        <li data-active={ pathName === '/sair' }>
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
