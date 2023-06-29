import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import ShowMore from './components/ShowMore';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        mt: '2rem',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Learn electronics & coding <br /> with our best-selling DIY STEM kits:
      </Typography>
      <ShowMore />
    </Box>
  );
}

export default App;
