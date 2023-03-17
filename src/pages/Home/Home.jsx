import Navigation from "components/Navigation/Navigation";
import { Container, Title, HomeBox, Text} from "./Home.styled";

const Home = () => {

    return (
        <Container>
        <Navigation />
        <HomeBox>
        <Title>Welcome to the phone book! </Title>
        <Text>  Here you can register to write down phone numbers 
            that are important to you, instead of memorizing them, as you did before.</Text>
        </HomeBox>
        </Container>
    );
};

export default Home;