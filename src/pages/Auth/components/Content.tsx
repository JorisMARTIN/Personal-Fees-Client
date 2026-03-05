import { Stack, Typography } from '@mui/material';

export default function Content() {
  return (
    <Stack sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}>
      <Typography
        component="h1"
        variant="h1"
        align="center"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', whiteSpace: 'nowrap' }}
      >
        Personal fees
      </Typography>
      <Typography>This app helps you keep track of your personal fees and expenses.</Typography>
    </Stack>
  );
}
