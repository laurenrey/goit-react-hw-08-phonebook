import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import Typography from '@mui/material/Typography';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Typography component="h2" variant="h4">
          Phonebook
        </Typography>
      </div>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Typography component="h3" variant="h4">
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </>
  );
}
