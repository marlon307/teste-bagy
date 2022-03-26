import React from 'react';
import BoxProducts from './BoxProducts';
import BoxTotalBuy from './BoxTotalBuy';
import style from './style.module.scss';

function FooterMain() {
  return (
    <section className={ style.footermain }>
      <BoxTotalBuy />
      <BoxProducts />
    </section>
  );
}

export default FooterMain;
