
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home() {
  return (
    <Container
      color="green"
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography component="h1" variant="h3" mt={20}>
        Welcome to your phonebook{' '}
        <span role="img" aria-label="Greeting icon">
          📱
        </span>
      </Typography>
    </Container>
  );
}

export default Home;
