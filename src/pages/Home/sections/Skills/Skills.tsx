import { Container, Grid, Typography, styled } from "@mui/material"
import { motion } from "framer-motion"
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { DiNetmagazine } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

const StyledSkills = styled("div")(() => ({
    backgroundColor: "#fff",
    paddingTop: "30px",
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

const StyledIcon = styled("i")(({ theme }) => ({
    fontSize: "4rem",
    marginBottom: theme.spacing(1),
    minWidth: "100px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}));

const StyleNameTecnology = styled("div")(() => ({
    fontSize: "1.3rem",
    fontWeight: "bold"
}))

export const Skills = () => {

    return (
        <>
            <StyledSkills id="skills" sx={{ textAlign: "center" }}>
                <motion.div
                    initial={{ opacity: 0, y: -95 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <Container maxWidth="xl">
                        <Grid>
                            <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} variant="h2">
                                Habilidades
                            </Typography>
                        </Grid>
                        <Grid container columns={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", marginTop: "50px" }}>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <IoLogoJavascript />
                                    <StyleNameTecnology>
                                        Javascript
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <FaReact />
                                    <StyleNameTecnology>
                                        ReactJS
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <FaNodeJs />
                                    <StyleNameTecnology>
                                        NodeJS
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <SiTypescript />
                                    <StyleNameTecnology>
                                        Typescript
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <FaJava />
                                    <StyleNameTecnology>
                                        Java
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <SiSpring />
                                    <StyleNameTecnology>
                                        Spring
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <FaDocker />
                                    <StyleNameTecnology>
                                        Docker
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <BiLogoPostgresql />
                                    <StyleNameTecnology>
                                        PostgreSQL
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <FaGithubSquare />
                                    <StyleNameTecnology>
                                        GitHub
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <TbBrandCSharp />
                                    <StyleNameTecnology>
                                        C# 
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <DiNetmagazine /> 
                                    <StyleNameTecnology>
                                        .NET    
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                            <Grid item xs={3}>
                                <StyledIcon>
                                    <VscAzure />
                                    <StyleNameTecnology>
                                        AZURE    
                                    </StyleNameTecnology>
                                </StyledIcon>
                            </Grid>
                        </Grid>
                    </Container>
                </motion.div>
            </StyledSkills>
        </>
    )

}