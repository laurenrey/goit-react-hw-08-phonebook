import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Typography, Container } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container component="main">
      <Typography component="h2" variant="h4" mt={4}>
        Phonebook
      </Typography>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Typography component="h3" variant="h4" mt={4}>
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Container>
  );
}
