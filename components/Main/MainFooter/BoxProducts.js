import React from 'react';
import style from './style.module.scss';

function BoxProducts() {
  return (
    <div className={ style.boxproduct }>
      <table className={ style.table } cellSpacing="0">
        <thead>
          <tr>
            <th>Produto</th>
          </tr>
          <tr>
            <th>Loja</th>
          </tr>
          <tr>
            <th>Preço</th>
          </tr>
          <tr>
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
            <td>Brincos #023</td>
            <td>Estilo Pri</td>
            <td>
              <span className={ style.tbprice }>R$ 29,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
          <tr>
            <td>Brincos #023</td>
            <td>Estilo Pri</td>
            <td>
              <span className={ style.tbprice }>R$ 29,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
          <tr>
            <td>Brincos #023</td>
            <td>Estilo Pri</td>
            <td>
              <span className={ style.tbprice }>R$ 29,90</span>
            </td>
            <td>
              <span className={ style.tbdate }>17/07/20</span>
            </td>
          </tr>
          <tr>
            <td>Brincos #023</td>
            <td>Estilo Pri</td>
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
