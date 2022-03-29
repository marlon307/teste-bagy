import React from 'react';

function Tick({
  height, x, y, payload: { value },
}) {
  const newValue = value.toLocaleString('pt-BR', { currency: 'BRL' });

  return (
    <text height={ height } x={ x } y={ y - 18 } fill="#9FA2B4">
      <tspan x={ x - 34 } dy="0.355em">{ Math.trunc(newValue) }</tspan>
    </text>
  );
}

export default Tick;
