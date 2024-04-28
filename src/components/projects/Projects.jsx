import { projectsPortfolio } from "../../assets/data/ProjectsData";
import * as S from "./Projects.styles";
import GithubImage from "../../assets/svg/github.svg";
import NetlifyImage from "../../assets/svg/netlify.svg";

export const Projects = () => {
    return (
        <S.ProjectsContainer>
            <S.ProjectsTitle>
                Some of{" "}
                <span>
                    {" "}
                    <br />
                    My Projects
                </span>
            </S.ProjectsTitle>
            <S.ProjectsList>
                {projectsPortfolio.map((project, index) => (
                    <S.ProjectContent key={index}>
                        <S.ProjectTitle>{project.title}</S.ProjectTitle>
                        <S.ContainerImage>
                            <img src={project.image} alt={project.title} lazy="true"/>
                        </S.ContainerImage>
                        <S.ContainerTechs>
                            {project.techs.map((tech, index) => (
                                <div key={index}>
                                    <img src={tech.src} alt={tech.name} />
                                    <p>{tech.name}</p>
                                </div>
                            ))}
                        </S.ContainerTechs>
                        <S.Description>{project.description}</S.Description>
                        <S.ContainerFooter>
                            {project.repository && (
                                <a href={project.repository} target="_blank" rel="noreferrer">
                                    <img src={GithubImage} alt={project.title} />
                                </a>
                            )}
                            {project.website && (
                                <a href={project.website} target="_blank" rel="noreferrer">
                                    <img src={NetlifyImage} alt={project.title} />
                                </a>
                            
                            )}
                        </S.ContainerFooter>
                    </S.ProjectContent>
                        
                ))}
            </S.ProjectsList>
        </S.ProjectsContainer>
    );
};
