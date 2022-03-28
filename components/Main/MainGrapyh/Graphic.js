import React from 'react';
import {
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CircleGraphic from './CircleGraphic';
import style from './style.module.scss';
import Tick from './Tick';

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
        margin={ {
          top: 26,
          right: 0,
          left: 52,
          bottom: 9,
        } }
      >
        <CartesianGrid
          vertical={ false }
        />
        <YAxis
          orientation="right"
          type="number"
          axisLine={ false }
          tickLine={ false }
          tick={ <Tick /> }
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
          activeDot={ !active && <CircleGraphic /> }
        />
        <Area
          dot={ false }
          type="monotone"
          dataKey="this_month"
          fill={ active ? 'url(#coloractive)' : '#ffffff00' }
          stroke={ active ? '#FC3C8D' : '#DFE0EB' }
          activeDot={ active && <CircleGraphic /> }
          strokeWidth={ 3 }
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Graphic;
