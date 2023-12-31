import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CustomButton from './CustomButton';
import AgeIndicator from './AgeIndicator';
import { ProductData } from '../types/ProductData';

export default function BasicCard(props: ProductData) {
  const { data } = props;
  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: '10px 10px 43px -2px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.imgSrc}
          alt={data.title}
          style={{ height: '16rem' }}
        />

        <CardContent
          sx={{
            px: '1.25rem',
            my: '1.5rem',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color={data.color}
            fontWeight="bold"
          >
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#2c262b',
              my: '1rem',
              fontWeight: 'bold',
              height: '3.5rem',
            }}
          >
            {data.text}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            color={data.color}
            sx={{ my: '0.5rem' }}
          >
            <s>
              <strong>kn{data.previousPrice}</strong>
            </s>{' '}
            kn{data.currentPrice}
          </Typography>
          <Typography variant="body2" color={data.color}>
            Limited {data.discount}% discount
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          mt: '2rem',
          mb: '1.5rem',
          mx: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <CustomButton text="Shop now" color={data.color} />
        <AgeIndicator age={data.age} color={data.color} />
      </CardActions>
    </Card>
  );
}
