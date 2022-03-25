import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import imgMarlon from '../../assets/38167590.jpeg';
import Svg from '../../assets/Svg';

function Header() {
  return (
    <header className={ style.header }>
      <div className={ style.contheader }>
        <h1>Visão Geral</h1>
      </div>
      <div className={ style.contheader }>
        <div className={ style.notif_search }>
          <span>
            <Svg nameSvg="search" />
          </span>
          <span>
            <Svg nameSvg="notify" />
          </span>
        </div>
        <div className={ style.userlogged }>
          <span>Marlon</span>
          <figure>
            <Image src={ imgMarlon } width={ 45 } height={ 45 } />
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Header;
