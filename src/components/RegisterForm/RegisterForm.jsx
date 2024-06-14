import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import {toast} from 'react-toastify';

import { Form, Wrap } from './RegisterForm.styled';
import { Title } from 'components/Navigation/navigation.styled';
import { Btn } from 'components/ContactForm/ContactForm.styled';
import { register } from 'redux/auth/auth-operations';
import { selectUser} from 'redux/selectors';

const RegisterForm = () => { 
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newUserName = form.elements.name.value;
    const newUserEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;
    if(newUserName === userData.name) {
      toast.warn('User with such name is already exist!', {
        theme: "dark"
      });
      return;
    }else if(newUserEmail === userData.email) {
       toast.warn('User with such email is already exist!', {
        theme: "dark"
       });
       return;
    }
    dispatch(register({
      name: newUserName, 
      email: newUserEmail, 
      password: userPassword}));
  };
 
  return (
    <Wrap>
      <Form  autoComplete="on" onSubmit={formSubmit}>
        <Title>Registration</Title>
        <TextField id="name" label="Name" required type='text' name='name'
        margin='normal' fullWidth variant="filled" autoComplete='off'
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
        <TextField id="email" label='Email'  required type='email' name='email' 
        autoComplete="off" margin='normal' fullWidth variant="filled"/>
        <TextField id="password" label="Password" required type='password' name='password'
        margin='normal' fullWidth variant="filled" autoComplete='off'/>
        <Btn type='submit' >SIGN UP</Btn>
       </Form> 
    </Wrap>);
};

export default RegisterForm;