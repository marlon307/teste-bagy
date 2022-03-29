import React, { useState, useEffect } from 'react';
import style from './style.module.scss';

function BoxTotalBuy({ data }) {
  const [totalSales, setTotalSales] = useState(0);
  useEffect(() => {
    function calcTotalSales() {
      const result = data?.reduce((acc, { total_sales }) => total_sales + acc, 0);
      setTotalSales(result);
    }
    calcTotalSales();
  }, [data]);

  return (
    <div className={ style.boxtotalbuy }>
      <div className={ style.headerbox }>
        <div className={ style.primaryLine }>
          <h2>Total Compras</h2>
          <span>Semana</span>
        </div>
        <div className={ style.secondaryLine }>
          <span>
            Valor geral:
            { ' ' }
            { totalSales?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </span>
        </div>
      </div>
      <main className={ style.mainbox }>
        <ul>
          { data?.map(({ loja, sales, total_sales }) => (
            <li key={ loja }>
              <span>{ loja }</span>
              <span>{ sales }</span>
              <span>{ total_sales?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span>
            </li>
          )) }
        </ul>
      </main>
    </div>
  );
}

export default BoxTotalBuy;
