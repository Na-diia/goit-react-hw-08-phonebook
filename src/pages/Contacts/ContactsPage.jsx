import Navigation from "components/Navigation/Navigation";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { ContactsWrap, Container, Box} from "./ContactsPage.styled";

const ContactsPage = () => {

    return (
        <Container>
        <Navigation />
        <ContactsWrap>
        <ContactForm />
        <Box>
        <Filter />
        <ContactList />
        </Box>
        </ContactsWrap>
        </Container>
    )
};

export default ContactsPage;