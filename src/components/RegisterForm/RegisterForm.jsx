import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Username"
          name="name"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};
