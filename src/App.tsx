import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import CardGrid from './components/CardGrid';
import CustomButton from './components/CustomButton';

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
      <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Learn electronics & coding <br /> with our best-selling DIY STEM kits:
      </Typography>
      <CardGrid />
      <CustomButton text="Show more" color="#ef2b37" />
    </Box>
  );
}

export default App;
