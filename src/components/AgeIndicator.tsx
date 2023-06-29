import { Box } from '@mui/material';

export default function AgeIndicator() {
  return (
    <Box
      sx={{
        backgroundColor: '#ef2b37',
        borderRadius: '5px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        p: '0.5rem',
      }}
    >
      <p style={{ fontSize: '0.75rem', margin: '0' }}>AGES</p>
      <p style={{ fontWeight: 'bold', margin: '0' }}>11+</p>
    </Box>
  );
}
