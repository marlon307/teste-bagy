import React from 'react';
import style from './style.module.scss';

function BoxTotalBuy() {
  return (
    <div className={ style.boxtotalbuy }>
      <div className={ style.headerbox }>
        <div className={ style.primaryLine }>
          <h2>Total Compras</h2>
          <span>Semana</span>
        </div>
        <div className={ style.secondaryLine }>
          <span>Valor geral: 13.250,00</span>
        </div>
      </div>
      <main className={ style.mainbox }>
        <ul>
          <li>
            <span>Estilo Pri</span>
            <span>250 compras</span>
            <span>R$ 4238,00</span>
          </li>
          <li>
            <span>Vilma Calçados</span>
            <span>187 compras</span>
            <span>R$ 1005,00</span>
          </li>
          <li>
            <span>Mary Lingerie</span>
            <span>124 compras</span>
            <span>R$ 914,00</span>
          </li>
          <li>
            <span>Loja Belíssima</span>
            <span>89 compras</span>
            <span>R$ 281,00</span>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default BoxTotalBuy;
