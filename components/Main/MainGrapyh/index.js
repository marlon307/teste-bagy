import React from 'react';
import { Chart } from 'react-google-charts';
import style from './style.module.scss';

const data = [
  ['Age', ''],
  [4, 5.5], [8, 12],
  [4, 5.5], [8, 12],
  [4, 5.5], [8, 12],
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
        {/* <Chart
          chartType="Line"
          data={ data }
          width="100%"
          height="100%"
          legendToggle
        /> */}
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
