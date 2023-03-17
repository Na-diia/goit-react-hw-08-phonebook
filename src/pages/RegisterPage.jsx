import Navigation from "components/Navigation/Navigation";
import RegisterForm from "components/RegisterForm/RegisterForm";

import { Container } from "./Home/Home.styled";

const RegisterPage = () => {
    
    return (
        <Container>
        <Navigation />
        <RegisterForm/>
        </Container>
    );
};

export default RegisterPage;