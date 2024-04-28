import styled from "styled-components";
import { colors } from "../../styles";

export const ProjectsContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding-top: 50px;

    @media (min-width: 768px) {
        padding-top: 10px;
    }
`;

export const ProjectsTitle = styled.h2`
    text-align: center;
    font-size: 30px;

    span {
        font-size: 40px;
        background: ${colors.TEXT_GRADIENT_GREEN};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const ProjectsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const ProjectContent = styled.div`
    padding: 0 10px;
`;

export const ProjectTitle = styled.h3`
    paddi: 8px 15px;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    margin-bottom: 10px;
    color: ${colors.TEXT_WHITE};
    background: ${colors.TEXT_GRADIENT_BLUE};
    box-shadow: ${colors.BOX_SHADOW_BLUE};
    text-decoration: none;
`;

export const ContainerImage = styled.div`
    text-align: center;

    img {
        width: 100%;
        height: 200px;
        box-shadow: ${colors.BOX_SHADOW_BLUE};
        border-radius: 10px;
    }

    @media (min-width: 768px) {
        img {
            max-width: 250px;
        }
    }
`;

export const ContainerTechs = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;

    div {
        text-align: center;
    }

    img {
        width: 35px;
        height: auto;
        margin: 0 5px;
    }

    p {
        margin-top: 2px;
        font-size: 14px;
        color: ${colors.TEXT_GREY_NEUTRAL};
    }
`;

export const Description = styled.div`
    margin-top: 0;
`;

export const ContainerFooter = styled.div`
    display: flex;
    
    img{
        width: 35px;
    }

    a:first-of-type {
        padding: 0 20px;
    }
`;
