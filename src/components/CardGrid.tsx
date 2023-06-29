import { Grid } from '@mui/material';
import BasicCard from './BasicCard';

export default function CardGrid() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ my: '2rem', display: 'flex', justifyContent: 'center' }}
    >
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
  );
}
