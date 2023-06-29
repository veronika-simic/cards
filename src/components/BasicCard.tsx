import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CardButton from './CardButtons';
import AgeChip from './AgeChip';

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/src/images/spencer.jpeg"
          alt="spencer"
          style={{ height: '100' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Spencer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A DIY voice assistant that talks, lights up and understands voice
            commands
          </Typography>
          <Typography variant="body2" color="text.secondary">
            kn1,027.99 kn813.99
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Limited 20% discount
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardButton />
        <AgeChip />
      </CardActions>
    </Card>
  );
}
