import { useState, useEffect } from 'react';
// https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element
const useResize = () => {
  const [dimensions, setDimensions] = useState({ innerWidth: 500, innerHeight: 480 });

  useEffect(() => {
    const handleResize = ({ target }) => {
      const { innerWidth, innerHeight } = target;
      setDimensions({
        innerWidth, innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions, setDimensions]);

  return dimensions;
};

export default useResize;
