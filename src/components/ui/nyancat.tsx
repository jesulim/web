import React, { useEffect, useState } from 'react';

const MovingGif = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        const newPosition = prevPosition + 1;
        if (newPosition >= window.innerWidth) {
          clearInterval(interval);
          return 0;
        }
        return newPosition;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ position: 'relative', left: position }}>
      <img src="./nyancat.gif" alt="Moving Gif" />
    </div>
  );
};

export default MovingGif;