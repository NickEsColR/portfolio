import { useState } from "react";
import * as S from "./Navbar.styles";

export const Navbar = () => {
    const [showMenuBurger, setShowMenuBurger] = useState(false);

    const clickItemNavbar = (item) => {
        const element = document.getElementById(item)
        const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
                <p onClick={()=>clickItemNavbar("about-me")}>About me</p>
                <p onClick={()=>clickItemNavbar("projects")}>Projects</p>
                <S.Button onClick={()=>clickItemNavbar("contact")}>Contact me</S.Button>
            </S.ContainerItems>
        </S.NavbarContainer>
    );
};
