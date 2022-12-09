import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserMenuContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <Typography component="h2" variant="h5">
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        width="50"
        variant="contained"
        sx={{ mt: 3, mb: 2, ml: 5 }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserMenuContainer>
  );
};
