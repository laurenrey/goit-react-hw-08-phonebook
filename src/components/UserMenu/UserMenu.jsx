import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Typography, Button } from '@mui/material';
import { UserMenuContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <Typography component="h2" variant="h5">
        Welcome, {user.email}
      </Typography>
      <Button
        type="button"
        width="50"
        variant="contained"
        sx={{ mt: 2, mb: 2, ml: 6 }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserMenuContainer>
  );
};
