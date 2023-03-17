import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import TextField from '@mui/material/TextField';
import { Oval } from "react-loader-spinner";

import { Btn, Form, Wrap, Title } from "./ContactForm.styled";
import { selectContacts, selectLoading } from "redux/selectors";
import { addContact } from "redux/contacts/contacts-operations";

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const isExist = contactName => {
    return contacts.some(({ name }) => name.toLowerCase() === contactName.toLowerCase());
  };

  const  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactName = form.elements.name.value;
    const contactPhone = form.elements.number.value;
  if (isExist(contactName)) {
      toast.warn(`${contactName} is already in contacts!`, {
        theme: "dark"
      });
      return;
    } else{
     dispatch(addContact({
      name: contactName, 
      number: contactPhone}));
     toast.success("Successfully!", {
      theme: "dark"
     });
     form.reset();
    };
  };

  return (
    <Wrap>
      <Form autoComplete="on"
       onSubmit={handleSubmit}>
        <Title>Your new contact!</Title>
      <TextField id="name-contact" label="Name" required type='text' name='name'
        margin='normal' fullWidth variant="filled" autoComplete='off'
       placeholder="Jacob Mercer"
      pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
      id="number-contact"
      label="Number"
      margin="normal"
      fullWidth
      variant="filled"
      autoComplete="off"
      placeholder="257-42-21"
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required/>
      <Btn type="submit"> Add contact
      {!contacts && isLoading && <Oval height={20}
       width={20}
       color="blue"
       visible={true}
       wrapperStyle={{"margin-left": 5}}
       ariaLabel='oval-loading'
       secondaryColor="#fff"
       strokeWidth={2}
       strokeWidthSecondary={2}/>}</Btn>
      </Form>
    </Wrap>
  )
};