import React from 'react';
import style from './style.module.scss';

function Box({ primaryLine, secondaryLine }) {
  return (
    <div className={ style.box }>
      <h4>{ primaryLine }</h4>
      <h2>{ secondaryLine }</h2>
    </div>
  );
}

export default Box;
