import { Grid } from '@mui/material';
import BasicCard from './BasicCard';

export default function CardGrid() {
  const products = [
    {
      color: '#ef2b37',
      imgSrc: '/src/images/spencer.jpeg',
      title: 'Spencer',
      text: ' A DIY voice assistant that talks, lights up, and understands voice commands',
      previousPrice: '1,027.99',
      currentPrice: '813.99',
      discount: '20',
      age: '11',
    },
    {
      color: '#f9c708',
      imgSrc: '/src/images/jay-d.jpeg',
      title: 'Jay-D',
      text: 'Build & code your own DJ mixer',
      previousPrice: '1,027.99',
      currentPrice: '856.99',
      discount: '15',
      age: '11',
    },
    {
      color: '#3abfe6',
      imgSrc: '/src/images/nibble.jpeg',
      title: 'Nibble',
      text: 'Build & code your very own retro game console',
      previousPrice: '813.99',
      currentPrice: '642.99',
      discount: '20',
      age: '9',
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{
        my: '0.25rem',
        display: 'flex',
        justifyContent: 'center',
        '@media (max-width: 1000px)': {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      {[0, 1, 2].map((value) => (
        <Grid key={value} item>
          <BasicCard data={products[value]} />
        </Grid>
      ))}
    </Grid>
  );
}
