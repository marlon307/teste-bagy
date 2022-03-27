import React, { useState } from 'react';
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import style from './style.module.scss';

const data = [
  {
    pv: 2400,
    amt: 2400,
  },
  {
    pv: 1398,
    amt: 2210,
  },
  {
    pv: 9800,
    amt: 2290,
  },
  {
    pv: 3908,
    amt: 2000,
  },
  {
    pv: 4800,
    amt: 2181,
  },
  {
    pv: 3800,
    amt: 2500,
  },
  {
    pv: 6000,
    amt: 4000,
  }, {
    pv: 5800,
    amt: 5400,
  }, {},
];

function Graphy() {
  const [seconfLineActive, setSeconfLineActive] = useState(true);

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
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={ data }
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
              dataKey="amt"
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
              dataKey="pv"
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
