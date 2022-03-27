import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../../../config/clientgraphql';
import style from './style.module.scss';
import Graphic from './Graphic';

function Graphy() {
  const [seconfLineActive, setSeconfLineActive] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const [positive, setPositive] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await client.query({
        query: gql`
        query {
          data {
            name
            loja
            year
            meta
            this_month
            last_month
            total_billing
            vendas {
              this_month
              last_month
            }
          }
        }
      `,
      });
      setDataUsers(data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const result = dataUsers[0]?.vendas.reduce((acc, { this_month, last_month }) => ({
      this_month: this_month + acc.this_month,
      last_month: last_month + acc.last_month,
    }));

    if (result && result.this_month > result.last_month) {
      setPositive(true);
    } else {
      setPositive(false);
    }
  }, [dataUsers]);

  return (
    <section className={ style.dashboard }>
      <div className={ style.headerdash }>
        <div className={ style.primaryline }>
          Total de faturamento mensal
        </div>
        <div className={ style.secondaryline }>
          <span>JULHO 2020</span>
          <div className={ style.infographyc }>
            <button
              type="button"
              data-active={ seconfLineActive }
              onClick={ () => setSeconfLineActive(true) }
            >
              Este mês
            </button>
            <button
              type="button"
              data-active={ !seconfLineActive }
              onClick={ () => setSeconfLineActive(false) }
            >
              Mês passado
            </button>
          </div>
        </div>
      </div>
      <div className={ style.chart }>
        <Graphic
          data={ dataUsers?.length && dataUsers[0]?.vendas }
          active={ seconfLineActive }
        />
      </div>
      <div className={ style.mnchart }>
        <ul>
          <li>
            <div className={ style.mn }>
              <span>Loja</span>
              <span>{ dataUsers[1]?.loja }</span>
            </div>
          </li>
          <li>
            <div className={ style.mn }>
              <span>Mês</span>
              <span>{ dataUsers[0]?.this_month }</span>
            </div>
          </li>
          <li>
            <div className={ style.mn }>
              <span>Ano</span>
              <span>{ dataUsers[0]?.year }</span>
            </div>
          </li>
          <li>
            <span>Total de Faturamento</span>
            <span>
              { dataUsers[0]?.total_billing.toLocaleString(
                'pt-BR',
                { style: 'currency', currency: 'BRL' },
              ) }

            </span>
          </li>
          <li>
            <span>Analize Comparativa</span>
            <span data-positive={ positive }>{ positive ? 'Positivo' : 'Negativo' }</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Graphy;
