import styled from "styled-components";
import { colors } from "../styles";

export const NavbarContainer = styled.div`
    max-width: 100vw;
    height: 100px;
    box-shadow: ${colors.BOX_SHADOW};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
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
        background: ${colors.TEXT_GRADIENT_BLUE };
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export const ImageLogo = styled.img`
    width: 90px;
    padding-right: 20px;
`;