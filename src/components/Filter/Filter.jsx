// import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

import { setFilter } from 'redux/contacts/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <form>
      <TextField
        margin="normal"
        id="name"
        label="Find contacts by name"
        name="name"
        value={filter}
        onChange={onChange}
      />
    </form>
  );
};
