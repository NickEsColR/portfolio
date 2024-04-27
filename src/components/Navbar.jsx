import * as S from "./Navbar.styles";

export const Navbar = () => {
    return (<S.NavbarContainer>
        <S.NavbarLogo>
        <S.ImageLogo src="/favicon.ico" alt="Logo" />
        <div>
            <h1>Nicolas Colmenares</h1>
            <h2>Frontend Developer</h2>
        </div>
        </S.NavbarLogo>
    </S.NavbarContainer>);
};
