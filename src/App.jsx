import { Container, Navbar,AboutMe, Projects, Contact } from "./components";
import './styles/App.css'

export const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <AboutMe />
                <Projects />
                <Contact />
            </Container>
        </>
    );
};
