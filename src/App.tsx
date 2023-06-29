import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import CardGrid from './components/CardGrid';

function App() {
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
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Learn electronics &amp coding <br /> with our best-selling DIY STEM
        kits:
      </Typography>
      <CardGrid />
      <Button variant="contained">Show more</Button>
    </Box>
  );
}

export default App;
