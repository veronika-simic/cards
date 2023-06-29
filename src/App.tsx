import Typography from '@mui/material/Typography';
import { Box, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';

import CardGrid from './components/CardGrid';

function App() {
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Learn electronics & coding <br /> with our best-selling DIY STEM kits:
      </Typography>
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
    </Box>
  );
}

export default App;
