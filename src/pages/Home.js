// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Home() {
  return (
    <div style={styles.container}>
      <Typography component="h1" variant="h3">
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Typography>
    </div>
  );
}

export default Home;
