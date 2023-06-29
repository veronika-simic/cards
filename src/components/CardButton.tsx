import Button from '@mui/material/Button';

export default function CardButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#ef2b37',
        borderRadius: '5rem',
        fontSize: '1.25rem',
        py: '0.5rem',
        textTransform: 'none',
        '&:hover': { backgroundColor: '#ef2b37' },
      }}
    >
      Shop now
    </Button>
  );
}
