import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { List, ContactItem, ContactName } from './ContactList.styled';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <Container component="main">
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactName>
              {name}: {number}
            </ContactName>
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
    </Container>
  );
};
