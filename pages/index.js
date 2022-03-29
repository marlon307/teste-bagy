import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import MainHeader from '../components/Main/MainHeader';
import Graphy from '../components/Main/MainGrapyh';
import FooterMain from '../components/Main/MainFooter';
import client from '../config/clientgraphql';

export default function Home() {
  const [dataUsers, setDataUsers] = useState([]);
  const [storeId, setStoreId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data } = await client.query({
        query: gql`
        query {
          data {
            name
            year
            meta
            this_month
            loja
            vendas {
              this_month
              last_month
            }
          }
        }
      `,
      });
      setDataUsers(data.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <MainHeader dataUser={ dataUsers[storeId] } />
      <Graphy storeId={ storeId } dataUsers={ dataUsers } setStoreId={ setStoreId } />
      <FooterMain />
    </>
  );
}
