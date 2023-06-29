import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import BasicCard from './components/BasicCard';

function App() {
  return (
    <>
      <Typography>
        Learn electronics and coding <br /> with our best-selling DIY STEM kits:
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <BasicCard />
        </Grid>
        <Grid item>
          <BasicCard />
        </Grid>
        <Grid item>
          <BasicCard />
        </Grid>
      </Grid>
      <Button variant="contained">Show more</Button>
    </>
  );
}

export default App;
