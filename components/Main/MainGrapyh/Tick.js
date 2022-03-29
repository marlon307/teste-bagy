import React from 'react';

function Tick({
  height, x, y, payload: { value },
}) {
  const newValue = value.toLocaleString('pt-BR', { currency: 'BRL' }).substr(0, 3).replace(/[.]/i, '');

  return (
    <text orientation="right" type="number" width="60" height={ height } x={ x } y={ y - 18 } stroke="none" fill="#9FA2B4" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="start">
      <tspan x={ x - 34 } dy="0.355em">{ newValue }</tspan>
    </text>
  );
}

export default Tick;
