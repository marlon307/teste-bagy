import React from 'react';
import {
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import style from './style.module.scss';

function Teste({ cx, cy }) {
  // stroke: active ? '#DFE0EB' : '#FC3C8D',
  //           strokeWidth: 6,
  //           border: '3px solid #555',
  //           fill: '#fff',
  //           r: 7,
  return (
    <>
      <circle
        cx={ cx }
        cy={ cy }
        r={ 18 }
        stroke="#3751FF"
        opacity={ 0.12 }
        strokeWidth={ 3 }
        fill="#ffffff00"
      />
      <circle
        cx={ cx }
        cy={ cy }
        r={ 7 }
        stroke="#FC3C8D"
        strokeWidth={ 6 }
        fill="#fff"
      />
    </>
  );
}

function Graphic({ data, active }) {
  const setValueLabelShart = ({ payload }) => {
    if (active) {
      return (
        <div className={ style.tooltipchart }>
          { payload && payload[1]?.value.toLocaleString(
            'pt-BR',
            { style: 'currency', currency: 'BRL' },
          ) }
        </div>
      );
    }
    return (
      <div className={ style.tooltipchart }>
        { payload && payload[0]?.value.toLocaleString(
          'pt-BR',
          { style: 'currency', currency: 'BRL' },
        ) }
      </div>
    );
  };
  return (
    <ResponsiveContainer>
      <AreaChart
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
          content={ setValueLabelShart }
        />
        <defs>
          <linearGradient id="coloractive" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="3%" stopColor="#37f3ffab" stopOpacity={ 0.28 } />
            <stop offset="97%" stopColor="#37f3ffab" stopOpacity={ 0.02 } />
          </linearGradient>
        </defs>
        <Area
          dot={ false }
          type="monotone"
          dataKey="last_month"
          connectNulls
          legendType="rect"
          stroke={ active ? '#DFE0EB' : '#FC3C8D' }
          strokeWidth={ 3 }
          fill={ !active ? 'url(#coloractive)' : '#ffffff00' }
          activeDot={ !active && {
            stroke: active ? '#DFE0EB' : '#FC3C8D',
            strokeWidth: 6,
            border: '3px solid #555',
            fill: '#fff',
            r: 7,
          } }
        />
        <Area
          dot={ false }
          type="monotone"
          dataKey="this_month"
          fill={ active ? 'url(#coloractive)' : '#ffffff00' }
          stroke={ active ? '#FC3C8D' : '#DFE0EB' }
          activeDot={ <Teste /> }
          strokeWidth={ 3 }
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Graphic;
