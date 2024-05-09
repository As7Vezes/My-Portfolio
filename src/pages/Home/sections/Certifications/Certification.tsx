import { Container, Grid, styled } from "@mui/material";
import { PiCertificateBold } from "react-icons/pi";
import { motion } from "framer-motion";

const StyledCertification = styled("div")(() => ({
  marginTop: "70px",
}));

const StyledIcon = styled("i")(({ theme }) => ({
  fontSize: "4rem",
  marginBottom: theme.spacing(1),
  minWidth: "100px",
}));

const StyledTextCertificate = styled("div")(() => ({
  fontSize: "1.2rem",
  wordWrap: "break-word",
  minHeight: "160px",
  maxWidth: "150px",
  fontWeight: "600",
}));

const StyledSpan = styled("span")(() => ({
  display: "block",
  marginTop: "10px",
}));

export const Certification = () => {

  return (
    <StyledCertification>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px", 
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Grid
              item
              xs={12}
              md={5}
              textAlign="center"
              sx={{
                border: "solid 4px black",
                textAlign: "center",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <StyledIcon>
                <PiCertificateBold />
              </StyledIcon>
              <StyledTextCertificate>
                Tecnólogo em Análise e desenvolvimento de sistemas
                <StyledSpan>Fatec</StyledSpan>
              </StyledTextCertificate>
            </Grid>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Grid
              item
              xs={12}
              md={5}
              textAlign="center"
              sx={{
                border: "solid 4px black",
                textAlign: "center",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <StyledIcon>
                <PiCertificateBold />
              </StyledIcon>
              <StyledTextCertificate>
                Técnico em informática para internet
                <StyledSpan>Etec</StyledSpan>
              </StyledTextCertificate>
            </Grid>
          </motion.div>
        </Grid>
      </Container>
    </StyledCertification>
  );
};
