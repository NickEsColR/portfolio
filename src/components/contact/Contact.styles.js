import styled from "styled-components";
import { colors } from "../../styles";

export const ContactContainer = styled.div`
    padding: 50px 0;

    @media(max-width: 768px) {
        padding: 20px 0;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 30px;
`;

export const ContainerForm = styled.div`
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 0 auto;
`;

export const Form = styled.form`
    box-sizing: border-box;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 2px solid ${colors.INPUT_BORDER};
    background-color: transparent;
    font-size: 16px;
    display: block;
    width: 100%;
    margin-bottom: 15px;
    color: ${colors.TEXT_INPUT};
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 5px;
    border: 2px solid ${colors.INPUT_BORDER};
    background-color: transparent;
    font-size: 16px;
    display: block;
    width: 100%;
    margin-bottom: 15px;
    color: ${colors.TEXT_INPUT};
`;

export const Button = styled.button`
    color: ${colors.TEXT_WHITE};
    box-shadow: ${colors.BOX_SHADOW};
    background: ${colors.TEXT_GRADIENT_BLUE};
    padding: 10px 40px;
    border-radius: 999px;
    border:none;
    margin: 15px 0;
    font-weight: 700;
    cursor: pointer;
    width: 150px;
    text-transform: uppercase;
`;

export const ContainerConditions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: ${colors.TEXT_BLACK};
    }
`;