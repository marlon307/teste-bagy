import React from 'react';
import Box from './Box';
import style from './style.module.scss';

function MainHeader() {
  return (
    <section className={ style.mainheader }>
      <Box primaryLine="Total de Lojas" secondaryLine="7231" />
      <Box primaryLine="Faturamento Total" secondaryLine="100.000,00" />
      <Box primaryLine="Loja Destaque" secondaryLine="Estilo Pri" />
      <Box primaryLine="Meta Mensal" secondaryLine="100.000,00" />
    </section>
  );
}

export default MainHeader;
