import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

import { login } from 'redux/auth/auth-operations';
import { Btn } from 'components/ContactForm/ContactForm.styled';
import {Form, WrapForm} from './LoginForm.styled';
import { Title } from 'components/Navigation/navigation.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(login(({ 
      email: form.elements.email.value, 
      password: form.elements.password.value})));
  };

  return (
    <WrapForm>
    <Form  autoComplete="on" onSubmit={formSubmit}>
    <Title>Log In</Title>
    <TextField 
     id="email" 
     label='Email'  required 
     type='email' 
     name='email' 
     autoComplete="off" 
     margin='normal' fullWidth 
     variant="filled"/>
    <TextField id="password" 
     label="Password" required 
     type='password' 
     name='password'
     margin='normal' fullWidth 
     variant="filled" 
     autoComplete='off'/>
    <Btn type='submit'>SIGN IN</Btn>
    </Form>
    </WrapForm>
    )
};

export default LoginForm;