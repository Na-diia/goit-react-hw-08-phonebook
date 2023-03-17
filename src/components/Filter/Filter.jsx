import { useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';

import { Text, FilterWrap } from './Filter.styled';
import { setFilter } from 'redux/filter/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return ( 
    <FilterWrap>
    <Text>Find contacts by name!</Text>
     <TextField
     label="Enter name"
      type="text" 
      pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
      onChange={filter}/>
     </FilterWrap>
   )
}; 