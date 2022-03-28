import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import Box from './Box';
import style from './style.module.scss';
import client from '../../../config/clientgraphql';

function MainHeader() {
  const [dataEmphasis, setDataEmphasis] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await client.query({
        query: gql`
        query {
          emphasis {
            loja
            meta
            total_billing
          }
        }
      `,
      });
      setDataEmphasis(data.emphasis);
    }
    fetchData();
  }, []);
  return (
    <section className={ style.mainheader }>
      <Box primaryLine="Total de Lojas" secondaryLine="7231" />
      <Box
        primaryLine="Faturamento Total"
        secondaryLine={ dataEmphasis?.total_billing?.toLocaleString(
          'pt-BR',
          { style: 'currency', currency: 'BRL' },
        ) }
      />
      <Box
        primaryLine="Loja Destaque"
        secondaryLine={ dataEmphasis?.loja }
      />
      <Box
        primaryLine="Meta Mensal"
        secondaryLine={ dataEmphasis?.meta?.toLocaleString(
          'pt-BR',
          { style: 'currency', currency: 'BRL' },
        ) }
      />
    </section>
  );
}

export default MainHeader;
