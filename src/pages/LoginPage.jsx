import Navigation from "components/Navigation/Navigation";
import LoginForm from "components/LoginForm/LoginForm";

import { Container } from "./Home/Home.styled";

const LoginPage = () => {

    return (
        <Container>
        <Navigation />
       <LoginForm />
        </Container>
    );
};

export default LoginPage;