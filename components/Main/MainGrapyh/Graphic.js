import React from 'react';
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import style from './style.module.scss';

function Graphic({ data, active }) {
  const setValueLabelShart = ({ payload }) => {
    if (active) {
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
          dataKey="last_month"
          connectNulls
          legendType="rect"
          stroke={ active ? '#DFE0EB' : '#FC3C8D' }
          strokeWidth={ 3 }
          activeDot={ !active && {
            stroke: active ? '#DFE0EB' : '#FC3C8D',
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
          stroke={ active ? '#FC3C8D' : '#DFE0EB' }
          activeDot={ active && {
            stroke: active ? '#FC3C8D' : '#DFE0EB',
            strokeWidth: 6,
            fill: '#fff',
            r: 7,
          } }
          strokeWidth={ 3 }
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Graphic;
