import React, { useEffect, useState } from 'react';

const MovingGif = () => {
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => prevPosition + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition + windowHeight >= documentHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', left: `${position}px`, display: isVisible ? 'block' : 'none' }}>
      <img src="./nyancat.gif" alt="Moving Gif" />
    </div>
  );
};

export default MovingGif;