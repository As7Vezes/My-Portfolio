import { Container, Grid, styled } from "@mui/material";
import { PiCertificateBold } from "react-icons/pi";
import { motion } from "framer-motion"

const StyledCertification = styled("div")(() => ({
    paddingTop: "30px",
    display: "flex",
    justifyContent: "center"
}))

const StyledIcon = styled("i")(({ theme }) => ({
    fontSize: "4rem",
    marginBottom: theme.spacing(1),
    minWidth: "100px",
    textAlign: "center"
}));

const StyledTextCertificate = styled("div")(() => ({
    fontSize: "1.2rem",
    wordWrap: "break-word",
    minHeight: "160px",
    maxWidth: "150px",
    fontWeight: "600"
}));

const StyledSpan = styled("span")(() => ({
    display: "block", 
    marginTop: "10px"
}));

export const Certification = () => {
    return (
        <>
            <StyledCertification>
                <Container maxWidth="lg">
                    <Grid container xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }}>
                        <motion.div
                            initial={{ opacity: 0, y: -95 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <Grid item xs={12} sx={{ border: "solid 5px black", padding: "15px", borderRadius: "5px"}}>
                                <StyledIcon sx={{ display: "block", gap: "10px", justifyContent: "center", textAlign: "center" }}>
                                    <PiCertificateBold />
                                </StyledIcon>
                                <StyledTextCertificate sx={{ display: "block", gap: "10px", justifyContent: "center", textAlign: "center" }}>
                                    Tecnólogo em Análise e desenvolvimento de sistemas
                                    <StyledSpan>Fatec</StyledSpan>
                                </StyledTextCertificate>
                            </Grid>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -95 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <Grid item xs={12} sx={{ border: "solid 5px black", padding: "15px", borderRadius: "5px"}}>
                                <StyledIcon sx={{ display: "block", gap: "10px", justifyContent: "center", textAlign: "center" }}>
                                    <PiCertificateBold />
                                </StyledIcon>
                                <StyledTextCertificate sx={{ display: "block", gap: "10px", justifyContent: "center", textAlign: "center" }}>
                                    Tecnico em informática para internet
                                    <StyledSpan>Etec</StyledSpan>
                                </StyledTextCertificate>
                            </Grid>
                        </motion.div>
                    </Grid>
                </Container>
            </StyledCertification>
        </>
    )
}