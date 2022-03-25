import React from 'react';

function Svg({ nameSvg }) {
  switch (nameSvg) {
    case 'search':
      return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_584_242)">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.16589 12.54C10.9273 12.5335 13.1606 10.2896 13.154 7.52823C13.1475 4.76681 10.9036 2.53354 8.14223 2.54007C5.38082 2.5466 3.14754 4.79047 3.15407 7.55188C3.16061 10.3133 5.40447 12.5466 8.16589 12.54ZM8.16944 14.04C11.7593 14.0315 14.6625 11.1145 14.654 7.52468C14.6455 3.93484 11.7285 1.03158 8.13868 1.04007C4.54884 1.04857 1.64559 3.96559 1.65408 7.55543C1.66257 11.1453 4.57959 14.0485 8.16944 14.04Z" fill="#C5C7CD" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.1331 11.5003C12.4253 11.2068 12.9002 11.2056 13.1938 11.4978L17.2032 15.4884C17.4968 15.7806 17.4979 16.2554 17.2057 16.549C16.9135 16.8426 16.4387 16.8437 16.1451 16.5515L12.1356 12.561C11.842 12.2688 11.8409 11.7939 12.1331 11.5003Z" fill="#C5C7CD" />
          </g>
          <defs>
            <clipPath id="clip0_584_242">
              <rect width="17.0378" height="16.0402" fill="white" transform="translate(0.962097 1.00009) rotate(-0.135531)" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'notify':
      return (
        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.67646 16.9418C8.78021 16.9392 9.6734 16.0418 9.67079 14.9371L5.67267 14.9466C5.67529 16.0513 6.57271 16.9444 7.67646 16.9418ZM14.3963 12.2475C13.791 11.6002 12.659 10.6269 12.6515 7.43004C12.6457 5.00192 10.9386 3.0622 8.64189 2.59076L8.64035 1.93951C8.63904 1.38732 8.19049 0.940571 7.63861 0.941877C7.08674 0.943182 6.6403 1.39205 6.64161 1.94424L6.64315 2.59549C4.34866 3.07779 2.65076 5.02556 2.6565 7.45368C2.66406 10.6505 1.53669 11.6292 0.934475 12.2793C0.747452 12.4813 0.664897 12.7225 0.667018 12.9584C0.671668 13.4709 1.07501 13.9574 1.67251 13.956L13.6662 13.9277C14.2637 13.9262 14.6651 13.4378 14.667 12.9253C14.668 12.6893 14.5843 12.4483 14.3963 12.2475Z" fill="#C5C7CD" />
        </svg>
      );
    case 'logoBagy':
      return (
        <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.004 21.1036C38.941 16.7268 36.7386 13.5262 32.7436 12.0212C30.5722 11.2007 29.6238 10.1014 28.9426 7.93136C27.3805 2.95574 22.2193 -0.0356592 17.1679 0.658734C12.4408 1.30181 8.73567 4.81969 7.77183 9.63278C7.5408 10.8002 7.16563 11.5804 5.9496 12.1794C2.12899 14.0609 0.0109792 17.1307 0.0740947 21.5517C0.139929 26.2317 0.233137 30.9159 0.088327 35.5902C-0.0762508 40.8121 4.00091 44.9856 8.53787 45.8616C12.1898 46.5649 15.8934 45.9685 18.2718 46.1166C22.695 46.1062 25.8125 46.1894 28.9275 46.0704C34.2075 45.8683 38.9467 41.4128 39.0153 36.5681C39.0915 31.4096 39.0793 26.2534 39.004 21.1036ZM11.0095 9.73887C11.5239 8.05794 12.5721 6.59041 13.9953 5.55858C15.4185 4.52675 17.1392 3.9868 18.8967 4.02053C22.3344 4.08612 25.405 6.57905 26.3292 9.93854C26.565 10.7974 26.2599 10.9203 25.5606 10.9198C23.2436 10.9126 20.9267 10.9308 18.6224 10.9362C16.4066 10.9415 14.1991 10.9193 11.9729 10.9667C11.0188 10.9816 10.7001 10.7464 11.0095 9.73887ZM35.4134 35.6541C35.3192 40.3577 31.5374 42.6267 28.2475 42.6766C25.324 42.7193 22.3941 42.6904 19.4664 42.6974L19.4663 42.6742C16.5863 42.681 13.7077 42.6878 10.8305 42.6946C7.24977 42.7031 3.63073 39.8702 3.77407 35.4635C3.93109 30.606 3.78057 25.7408 3.82383 20.8772C3.85767 17.3743 6.33652 14.5881 9.83667 14.3587C16.2894 13.9369 22.7532 13.7531 29.2146 14.2918C32.737 14.5846 35.2228 17.378 35.3175 20.9291C35.4429 25.8407 35.5219 30.7419 35.4134 35.6541Z" fill="white" />
        </svg>
      );
    default:
      return null;
  }
}

export default Svg;
