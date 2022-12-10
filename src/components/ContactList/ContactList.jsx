import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { List, ContactItem } from './ContactList.styled';
import { Button, Typography } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Typography component="p" variant="h6">
            {name}: {number}
          </Typography>

          <Button
            type="button"
            variant="contained"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
};
