import styled from "styled-components";
import { colors } from "../../styles";

export const NavbarContainer = styled.div`
    max-width: 100vw;
    height: 100px;
    box-shadow: ${colors.BOX_SHADOW};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin:0;
    background: ${colors.TEXT_WHITE};
`;

export const NavbarLogo = styled.div`
    display: flex;
    align-items: center;

    h1,h2{
        font-weight: 700,
        color: ${colors.TEXT_BLACK};
        margin:0;
    }

    h1{
        font-size: 2rem;
    }

    h2{
        background: ${colors.TEXT_GRADIENT_BLUE};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export const ImageLogo = styled.img`
    width: 90px;
    padding-right: 20px;
`;

export const ContainerItems = styled.div`
    display: flex;
    align-items: center;

    p {
        cursor: pointer;
        padding: 0 13px;
        text-decoration: none;
        color: ${colors.TEXT_BLACK};
        font-weight: 500;
    }

    @media (max-width: 768px) {
        display: ${(props) => (props.$showMenuBurger ? "inline-block" : "none")};
        position: absolute;
        top: 100px;
        background: ${colors.TEXT_WHITE};
        box-shadow: ${colors.BOX_SHADOW};
        padding: 10px 0 20px 0;
        width: 100%;
        left: 0;

        a {
            padding: 10px 20px;
            display: block;
            text-align: center;
            color: ${colors.TEXT_BLACK};
            font-weight: 500;
        }
    }
`;

export const Button = styled.button`
    color: ${colors.TEXT_WHITE};
    box-shadow: ${colors.BOX_SHADOW_BUTTON};
    background: ${colors.TEXT_GRADIENT_BLUE};
    padding: 10px 20px;
    border-radius: 999px;
    border: none;
    margin: 10px 0;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background: ${colors.TEXT_GRADIENT_BLUE_HOVER};
    }

    @media (max-width: 768px) {
        width: 50%;
        margin: 5px 10px 0 10px;
    }
`;

export const ContainerBurger = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const BurgerMenu = styled.div`
    width: 35px;
    height: 2px;
    background: ${colors.TEXT_BLACK};
    margin: 6px 0;
`;
