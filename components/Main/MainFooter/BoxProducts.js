import React from 'react';
import style from './style.module.scss';

function BoxProducts({ data }) {
  return (
    <div className={ style.boxproduct }>
      <table className={ style.table } cellSpacing="0">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Loja</th>
            <th>Preço</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          { data?.map(({
            loja, product, value, date,
          }) => (
            <tr key={ product }>
              <td>{ product }</td>
              <td>{ loja }</td>
              <td>
                <span className={ style.tbprice }>{ value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span>
              </td>
              <td>
                <span className={ style.tbdate }>{ date }</span>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default BoxProducts;
