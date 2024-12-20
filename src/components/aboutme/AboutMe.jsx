import { socialNetworks } from "../../assets/data/socialNetworks";
import * as S from "./AboutMe.styles";
import ProfileImage from "../../assets/img/perfil.png";


export const AboutMe = () => {

    return (
        <S.AboutMeContainer id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>Hi, I'm</p>
                        <p>Nicolas Colmenares</p>
                        <p>Fullstack Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        <p>
                            I'm a Fullstack Developer with experience in
                            technologies like Next, React, Typescript, Tailwind, AWS and OpenAI. I'm passionate about learning new
                            technologies and improving my skills to become a better
                            developer.
                        </p>
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a
                                key={index}
                                href={`https://${network.link}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name} />
                            </a>
                        
                        ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src={ProfileImage} alt="Nicolas Colmenares" />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.AboutMeContainer>
    );
};
