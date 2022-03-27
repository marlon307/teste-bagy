import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../../../config/clientgraphql';
import style from './style.module.scss';
import Graphic from './Graphic';

function Graphy() {
  const [seconfLineActive, setSeconfLineActive] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);

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
              <span>Estilo Pri</span>
            </div>
          </li>
          <li>
            <div className={ style.mn }>
              <span>Mês</span>
              <span>Julho</span>
            </div>
          </li>
          <li>
            <div className={ style.mn }>
              <span>Ano</span>
              <span>2020</span>
            </div>
          </li>
          <li>
            <span>Total de Faturamento</span>
            <span>R$ 45.000,00</span>
          </li>
          <li>
            <span>Analize Comparativa</span>
            <span>Positivo</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Graphy;
