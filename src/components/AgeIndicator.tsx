import { Box } from '@mui/material';

export default function AgeIndicator(props: { age: string; color: string }) {
  const { age, color } = props;
  return (
    <Box
      sx={{
        backgroundColor: color,
        borderRadius: '5px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        p: '0.5rem',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '0.75rem', margin: '0' }}>AGES</p>
      <p style={{ fontWeight: 'bold', margin: '0' }}>{age}+</p>
    </Box>
  );
}
