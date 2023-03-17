import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { selectIsLogin } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { Container, HeaderLink, Header, List, WrapIcon, Title, Item, HomeLink} from './navigation.styled';

import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
    const userIsLogin = useSelector(selectIsLogin);
     
    return (
        <Container >
        <Header>
        < HomeLink to="/">
        <WrapIcon></WrapIcon>
        <Title>PHONE BOOK</Title>
        </ HomeLink>
        <List >
         <li>{!userIsLogin && <HeaderLink to="/">HOME</HeaderLink>}</li>
         <li>{!userIsLogin && <HeaderLink to="/register" >SIGN UP</HeaderLink>}</li>
         <li>{!userIsLogin && <HeaderLink to="/login" >SIGN IN</HeaderLink>}</li>
         <Item>{userIsLogin && <HeaderLink to="/contacts">CONTACTS</HeaderLink>}</Item>
         {userIsLogin && <UserMenu />}
        </List >
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
        </Header>
        </Container>
    );
};

export default Navigation;