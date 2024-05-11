import { FC, ReactElement } from "react";
import { Container, Grid, Typography, styled } from "@mui/material";

const StyledFooter = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    backgroundColor: "secondary.main",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    background: "#"
}))

export const Footer: FC = (): ReactElement => {

    // const smallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <StyledFooter>
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            &copy; Denys Natanael
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle2" fontWeight={"bold"}>
                            {`${new Date().getFullYear()} | Inovando e criando soluções digitais impactantes | `}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledFooter>
    );
};

export default Footer;