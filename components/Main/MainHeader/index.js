import React from 'react';

import Box from './Box';
import style from './style.module.scss';

function MainHeader({ dataUser }) {
  const getMaxValue = () => {
    const result = dataUser?.vendas.reduce((acc, objectStore) => objectStore.this_month + acc, 0);
    return result;
  };

  return (
    <section className={ style.mainheader }>
      <Box primaryLine="Total de Lojas" secondaryLine="7231" />
      <Box
        primaryLine="Faturamento Total"
        secondaryLine={ getMaxValue()?.toLocaleString(
          'pt-BR',
          { style: 'currency', currency: 'BRL' },
        ) }
      />
      <Box
        primaryLine="Loja Destaque"
        secondaryLine={ dataUser?.loja }
      />
      <Box
        primaryLine="Meta Mensal"
        secondaryLine={ dataUser?.meta?.toLocaleString(
          'pt-BR',
          { style: 'currency', currency: 'BRL' },
        ) }
      />
    </section>
  );
}

export default MainHeader;
