import React from 'react';
import style from './style.module.scss';

function BoxProducts() {
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
          <tr>
            <td>Brincos #023</td>
            <td>Estilo Pri</td>
            <td>
              <span className={ style.tbprice }>R$ 350,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
          <tr>
            <td>Conjunto #023</td>
            <td>Estilo Pri</td>
            <td>
              <span className={ style.tbprice }>R$ 29,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
          <tr>
            <td>Body #077</td>
            <td>Mary Lingerie</td>
            <td>
              <span className={ style.tbprice }>R$ 29,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
          <tr>
            <td>Sandália #023</td>
            <td>Mary Lingerie</td>
            <td>
              <span className={ style.tbprice }>R$ 29,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
          <tr>
            <td>Brincos #023</td>
            <td>Vilma Calçados</td>
            <td>
              <span className={ style.tbprice }>R$ 29,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BoxProducts;
