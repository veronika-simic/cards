import { Box, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';

import CardGrid from './CardGrid';

export default function ShowMore() {
  const [isLoading, setIsLoading] = useState(false);
  const [cardsCount, setCardsCount] = useState(1);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCardsCount((prevCount) => prevCount + 1);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      {Array.from({ length: cardsCount }, (_, index) => (
        <CardGrid key={index} />
      ))}
      <Button
        onClick={handleClick}
        sx={{
          display: isLoading ? 'none' : 'block',
          mt: '2rem',
          borderRadius: '5rem',
          fontSize: '1.25rem',
          p: '0.5rem 1.5rem',
          textTransform: 'none',
          backgroundColor: '#ef2b37',
          color: 'white',
          '&:hover': { backgroundColor: '#ef2b37' },
        }}
      >
        Show more
      </Button>
      {isLoading && (
        <CircularProgress
          sx={{
            mt: '2rem',
            color: '#ef2b37',
          }}
        />
      )}
    </>
  );
}
