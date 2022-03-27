import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { gql } from '@apollo/client';
import client from '../../../config/clientgraphql';
import style from './style.module.scss';

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
            vendas {
              this_month
              last_month
            }
          }
        }
      `,
      });
      setDataUsers(data);
    }
    fetchData();
  }, []);

  const setValueLabelShart = ({ payload }) => {
    if (seconfLineActive) {
      return (
        <div className={ style.tooltipchart }>
          { payload[0]?.value.toLocaleString(
            'pt-BR',
            { style: 'currency', currency: 'BRL' },
          ) }
        </div>
      );
    }
    return (
      <div className={ style.tooltipchart }>
        { payload[1]?.value.toLocaleString(
          'pt-BR',
          { style: 'currency', currency: 'BRL' },
        ) }
      </div>
    );
  };

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
        {dataUsers?.data?.length && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={ dataUsers?.data[2].vendas }
          >
            <CartesianGrid
              vertical={ false }
              strokeDasharray="0"
            />
            <YAxis
              orientation="right"
              type="number"
              axisLine={ false }
              tickLine={ false }
              sacale="sequential"
            />
            <Tooltip
              cursor={ false }
              content={ setValueLabelShart }
            />
            <Line
              dot={ false }
              type="monotone"
              dataKey="last_month"
              connectNulls
              legendType="rect"
              stroke={ seconfLineActive ? '#DFE0EB' : '#FC3C8D' }
              strokeWidth={ 3 }
              activeDot={ !seconfLineActive && {
                stroke: seconfLineActive ? '#DFE0EB' : '#FC3C8D',
                strokeWidth: 6,
                fill: '#fff',
                r: 7,
              } }
            />
            <Line
              dot={ false }
              type="monotone"
              dataKey="this_month"
              id="pink"
              stroke={ seconfLineActive ? '#FC3C8D' : '#DFE0EB' }
              activeDot={ seconfLineActive && {
                stroke: seconfLineActive ? '#FC3C8D' : '#DFE0EB',
                strokeWidth: 6,
                fill: '#fff',
                r: 7,
              } }
              strokeWidth={ 3 }
            />
          </LineChart>
        </ResponsiveContainer>
        )}
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
