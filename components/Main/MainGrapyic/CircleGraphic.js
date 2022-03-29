import React from 'react';

function CircleGraphic({ cx, cy }) {
  return (
    <>
      <circle
        cx={ cx }
        cy={ cy }
        r={ 18 }
        stroke="#3751FF"
        opacity={ 0.12 }
        strokeWidth={ 3 }
        fill="#ffffff00"
      />
      <circle
        cx={ cx }
        cy={ cy }
        r={ 7 }
        stroke="#FC3C8D"
        strokeWidth={ 6 }
        fill="#fff"
      />
    </>
  );
}

export default CircleGraphic;
