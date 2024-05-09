import { Container, Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion"

const StyledAbout = styled("div")(() => ({
    backgroundColor: "#fff",
    paddingTop: "30px",
    marginTop: "40px"
}))

const StyledTextAboutMe = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "30px",
    fontSize: "2rem",
    fontWeight: "bold"
}))

export const About = () => {

    return (
        <>
            <StyledAbout id="about">
                <motion.div
                    initial={{ opacity: 0, y: -95 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <Container maxWidth="lg">
                        <Grid>
                            <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} variant="h2">
                                About me
                            </Typography>
                        </Grid>
                        <Grid>
                            <StyledTextAboutMe>
                                <Typography variant="h6">
                                    Sou um profissional apaixonado pela área de tecnologia, com  experiência como Desenvolvedor Web Full Stack. Ao longo da minha jornada, desenvolvi habilidades que vão além do domínio das tecnologias, como a capacidade de resolver problemas de forma criativa e eficiente. Tenho um forte compromisso com a qualidade e a usabilidade dos produtos que desenvolvo, sempre buscando superar as expectativas dos usuários e garantir uma experiência excepcional.
                                </Typography>
                            </StyledTextAboutMe>
                        </Grid>
                    </Container>
                </motion.div>
            </StyledAbout>
        </>
    )
}
