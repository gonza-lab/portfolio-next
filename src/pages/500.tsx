import { Box, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

const Custom500 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h2">Sitio en construcción :)</Typography>
      <Typography variant="h3">
        <Link href="https://www.linkedin.com/in/gonzadev/" passHref>
          <MuiLink href="https://www.linkedin.com/in/gonzadev/">
            Linkedin
          </MuiLink>
        </Link>
      </Typography>
    </Box>
  );
};

export default Custom500;
