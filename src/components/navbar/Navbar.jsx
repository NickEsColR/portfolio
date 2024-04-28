import { useState } from "react";
import * as S from "./Navbar.styles";

export const Navbar = () => {
    const [showMenuBurger, setShowMenuBurger] = useState(false);

    
    return (
        <S.NavbarContainer>
            <S.NavbarLogo>
                <S.ImageLogo src="/favicon.ico" alt="Logo" />
                <div>
                    <h1>Nicolas Colmenares</h1>
                    <h2>Frontend Developer</h2>
                </div>
            </S.NavbarLogo>
            <S.ContainerBurger onClick={()=>setShowMenuBurger(!showMenuBurger)}>
                <S.BurgerMenu />
                <S.BurgerMenu />
                <S.BurgerMenu />
            </S.ContainerBurger>
            <S.ContainerItems $showMenuBurger={showMenuBurger}>
                <p>About me</p>
                <p>Projects</p>
                <S.Button>Contact me</S.Button>
            </S.ContainerItems>
        </S.NavbarContainer>
    );
};
