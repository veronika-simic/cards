import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CardButton from './CardButton';
import AgeChip from './AgeIndicator';

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/src/images/spencer.jpeg"
          alt="spencer"
          style={{ height: '16rem' }}
        />
        <CardContent sx={{ px: '1.25rem', my: '1rem' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="#ef2b37"
            fontWeight="bold"
          >
            Spencer
          </Typography>
          <Typography
            variant="body2"
            sx={{
              my: '1rem',
              fontWeight: 'bold',
            }}
          >
            A DIY voice assistant that talks, lights up, and understands voice
            commands
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            color="#ef2b37"
            sx={{ my: '0.5rem' }}
          >
            <s>kn1,027.99</s> kn813.99
          </Typography>
          <Typography variant="body2" color="#ef2b37">
            Limited 20% discount
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ my: '1.5rem', display: 'flex', justifyContent: 'space-between' }}
      >
        <CardButton />
        <AgeChip />
      </CardActions>
    </Card>
  );
}
