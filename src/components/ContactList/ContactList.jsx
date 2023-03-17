import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { List, Text, BtnDelete, Item } from './ContactList.styled';
import { selectContacts, selectFilter, selectLoading, selectError } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/contacts-operations';
import Loader from 'components/Loader/Loader';

export const ContactList =() => {
  const contactsValue = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const findContact = () => {
    if(!filter) return contactsValue;
    
      return contactsValue.filter(contact => 
         contact.name.toLowerCase().includes(filter)
        );
  };

  const foundContacts = findContact();

  const removeContact = (id) => {
    dispatch(deleteContact(id));
    toast.success('The contact deleted!', {
      theme: 'dark'
    });
  };

  const contacts = foundContacts.map(({id, name, number}) => {
    return (<Item key={id}><Text>{name} : {number}</Text>
    <BtnDelete type="button" 
    onClick={() => removeContact(id)}></BtnDelete></Item>)});

  return(
    <List>
      {isLoading && <Loader />}
      {error && <Text>{error}</Text>}
      {contactsValue < 1 && <Text>Contact list is empty!</Text>}
      {contacts}
    </List>
  )
};
