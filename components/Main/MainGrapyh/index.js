import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
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
    pv: 4300,
    amt: 21000,
  },
  {},
];

function Graphy() {
  return (
    <section className={ style.dashboard }>
      <div className={ style.headerdash }>
        <div className={ style.primaryline }>
          Total de faturamento mensal
        </div>
        <div className={ style.secondaryline }>
          <span>JULHO 2020</span>
          <div className={ style.infographyc }>
            <span>Este mês</span>
            <span>Mês passado</span>
          </div>
        </div>
      </div>
      <div className={ style.chart }>
        <ResponsiveContainer>
          <AreaChart
            data={ data }
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={ false }
            />
            <YAxis orientation="right" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#dfe0eb"
              fill="#fff"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#fc3c8d"
              fill="#fff"
            />
          </AreaChart>
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
