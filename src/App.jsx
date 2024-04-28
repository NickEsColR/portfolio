import { Container, Navbar,AboutMe, Projects } from "./components";

export const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <AboutMe />
                <Projects />
            </Container>
        </>
    );
};
