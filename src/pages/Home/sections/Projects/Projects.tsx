import { Grid, Typography, styled, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import AuthenticationAPI from "../../../../assets/images/imgProjects/AuthenticationAPI.png";
import WeatherAPI from "../../../../assets/images/imgProjects/Weather-api.png";
import MemorizationHack from "../../../../assets/images/imgProjects/MemorizationHack.png";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

interface ProjectCardProps {
  img: string;
  description: string;
  tecnologys: React.ReactNode[];
  linkDeploy?: string;
  linkGitHub: string;
}

const StyledProjects = styled("div")(({ theme }) => ({
  marginTop: "40px",
  background: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center"
}));

const StyledContainerProjects = styled("div")(({ smallScreen }: { smallScreen: boolean }) => ({
  width: smallScreen ? "300px" : "450px", 
  height: smallScreen ? "auto" : "350px",
  border: "4px solid white",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  padding: "10px",
  marginBottom: "80px",
}));

const StyledImageProjects = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));

const StyledNameProjects = styled("div")(() => ({
  color: "#fff",
  fontSize: "1.1rem",
  display: "flex",
  alignItems: "flex-end",
  width: "100%",
  marginTop: "10px"
}));

const StyledTecnologyprojects = styled("div")(() => ({
  fontSize: "1.8rem",
  display: "flex",
  alignItems: "center",
  width: "100%",
  color: "#fff",
  marginTop: "10px",
  gap: "10px"
}));

const StyledContainerLikeLiks = styled("div")(() => ({
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    gap: "25px",
    marginTop: "10px"
}))

const StyledLikeLiks = styled("a")(() => ({
    padding: "3px",
    background: "#fff",
    cursor: "pointer",
    fontSize: "1.1rem",
    borderRadius: "5px",
    fontWeight: "bold",
    "&:hover": {
        backgroundColor: "#d1d1d1", 
        color: "#fff"
    },
    transition: ".15s ease",
    textDecoration: "none",
    color: "black"
}))

const ProjectCard: React.FC<ProjectCardProps> = ({ img, description, tecnologys, linkDeploy, linkGitHub }) => {
  const smallScreen = useMediaQuery('(max-width: 600px)'); 

  return (
    <StyledContainerProjects smallScreen={smallScreen}>
      <StyledImageProjects src={img} alt={description} />
      <StyledNameProjects>{description}</StyledNameProjects>
      <StyledTecnologyprojects>
        {tecnologys.map((icon, index) => (
          <span key={index}>{icon}</span> 
        ))}
      </StyledTecnologyprojects>
      <StyledContainerLikeLiks>
        {linkDeploy && (
          <StyledLikeLiks href={linkDeploy} target="_blank">Deploy</StyledLikeLiks>
        )}
        <StyledLikeLiks href={linkGitHub} target="_blank">GitHub</StyledLikeLiks>
      </StyledContainerLikeLiks>
    </StyledContainerProjects>
  );
};

export const Projects = () => (
  <StyledProjects id="projects">
    <motion.div
      initial={{ opacity: 0, y: -95 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={3} mt={5}>
        <Grid item xs={12}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
            variant="h2"
          >
            Projetos
          </Typography>
        </Grid>
        {[
          {
            img: AuthenticationAPI,
            description: "Authentication API Project #Back-end",
            tecnologys: [<FaJava />, <SiSpring />, <SiSpringsecurity />], 
            linkDeploy: undefined,
            linkGitHub: "https://github.com/As7Vezes/authentication-api-java"
          },
          {
            img: WeatherAPI,
            description: "Weather API #Front-End",
            tecnologys: [<SiJquery />, <FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />], 
            linkDeploy: "https://as7vezes.github.io/Weather-api/",
            linkGitHub: "https://github.com/As7Vezes/Weather-api"
          },
          {
            img: MemorizationHack,
            description: "Memorization Hack #Full-Stack",
            tecnologys: [<TbBrandNextjs />, , <SiDotnet />, <VscAzure />], 
            linkDeploy: undefined,
            linkGitHub: "https://github.com/As7Vezes/Memorization-Hack-BackEnd"
          }
        ].map((project, index) => (
          <Grid item key={index}>
            <ProjectCard
              img={project.img}
              description={project.description}
              tecnologys={project.tecnologys}
              linkDeploy={project.linkDeploy}
              linkGitHub={project.linkGitHub}
            />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  </StyledProjects>
);
