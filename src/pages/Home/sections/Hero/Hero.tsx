import React from "react";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import Popover from "@mui/material/Popover";
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Avatar from "../../../../assets/images/fotoPerfil.jpg";
import GithubIcon from "../../../../assets/icons/github.png";
import LinkedinIcon from "../../../../assets/icons/linkedin.png";
import WhatsappIcon from "../../../../assets/icons/whatsapp.png";
import GmailIcon from "../../../../assets/icons/gmail.png";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimetedBackground/AnimetedBackgound";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up('xs')]: { // <= mobile
    paddingTop: "200px",

  },
  [theme.breakpoints.up('md')]: { // >=mobile
    paddingTop: "0",
  }
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  objectFit: "cover",
}));

const UlStyled = styled("ul")(() => ({
  width: "max-content",
  height: "20px",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ListIcons = styled("li")(() => ({
  listStyle: "none",
  margin: "0 10px",
}));

const StyledIcon = styled("img")(() => ({
  maxWidth: "2rem",
  maxHeight: "2rem",
  margin: "0.5rem",
}));

const downloadFile = () => {
  const fileUrl = "https://drive.google.com/file/d/1YcHgGkbwhhYkNGyanHVL4JCUdZPOKlKP/view?usp=drive_link";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "currículo.pdf"; 
  link.target = "_blank";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} textAlign="center">
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} alt="" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                Denys Natanael
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                I'm a Full-Stack Developer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={downloadFile}>
                    <DownloadIcon />
                    <Typography>
                      Dowload CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                    sx={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      "&:hover": {
                        backgroundColor: "darkblue",
                      },
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <MailOutlineIcon />
                    <Typography>
                      Contact me
                    </Typography>
                  </Button>
                </Grid>
              </Grid>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{
                  top: anchorEl ? anchorEl.getBoundingClientRect().bottom : 0,
                  left: anchorEl ? anchorEl.getBoundingClientRect().left : 0,
                }}
              >
                <Typography sx={{ p: 2, background: "black", display: "flex", justifyContent: "center" }}>
                  <UlStyled>
                    <ListIcons>
                      <a href="https://github.com/As7Vezes" target="_blank">
                        <StyledIcon src={GithubIcon} alt="GitHub" />
                      </a>
                      <a href="https://www.linkedin.com/in/denys-natanael-165a8920b" target="_blank">
                        <StyledIcon src={LinkedinIcon} alt="Linkedin" />
                      </a>
                      <a href="https://wa.me/5513997989779" target="_blank">
                        <StyledIcon src={WhatsappIcon} alt="WhatsApp" />
                      </a>
                      <a href="https://mailto:denysn60@gmail.com" target="_blank">
                        <StyledIcon src={GmailIcon} alt="Gmail" />
                      </a>
                    </ListIcons>
                  </UlStyled>
                </Typography>
              </Popover>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
