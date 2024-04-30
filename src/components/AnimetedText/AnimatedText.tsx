import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

interface AnimatedTextProps {
  text: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentText += text[currentIndex];
      setVisibleText(currentText);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <Typography color="primary.contrastText" variant="h3" textAlign="center">{visibleText}</Typography>;
};

export default AnimatedText;
