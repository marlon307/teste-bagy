import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import BoxProducts from './BoxProducts';
import BoxTotalBuy from './BoxTotalBuy';
import style from './style.module.scss';
import client from '../../../config/clientgraphql';

function FooterMain() {
  const [dataBuyAndSales, setDataBuyAndSales] = useState({});
  useEffect(() => {
    async function fetchBuysAndSales() {
      const { data } = await client.query({
        query: gql`
        query {
          buys {
            loja
            sales
            total_sales
          }
          sales {
            loja
            product
            value
            date
          }
        }
      `,
      });

      setDataBuyAndSales(data);
    }
    fetchBuysAndSales();
  }, []);

  return (
    <section className={ style.footermain }>
      <BoxTotalBuy data={ dataBuyAndSales.buys } />
      <BoxProducts data={ dataBuyAndSales.sales } />
    </section>
  );
}

export default FooterMain;
