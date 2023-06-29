import Typography from '@mui/material/Typography';
import { Box, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';

import CardGrid from './components/CardGrid';

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      <CardGrid />
      {isShown && <CardGrid />}
      <Button
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsShown(true);
            setIsLoading(false);
          }, 1000);
        }}
        sx={{ display: isLoading ? 'none' : 'block' }}
      >
        Show more
      </Button>
      {isLoading && <CircularProgress />}
    </Box>
  );
}

export default App;
