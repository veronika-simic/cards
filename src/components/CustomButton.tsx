import Button from '@mui/material/Button';

export default function CustomButton(props: { text: string; color: string }) {
  const { text, color } = props;
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: color,
        borderRadius: '5rem',
        fontSize: '1.25rem',
        py: '0.5rem',
        textTransform: 'none',
        '&:hover': { backgroundColor: color },
      }}
    >
      {text}
    </Button>
  );
}
