import { AppBar, IconButton, MenuItem, Menu, Toolbar, styled } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMobile = useMediaQuery('(max-width:600px)'); 

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: isMobile ? "space-between" : "space-evenly", 
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    {!isMobile && (
                        <>
                            <ScrollLink to="about" smooth={true} duration={500}>
                                <MenuItem>Sobre mim</MenuItem>
                            </ScrollLink>
                            <ScrollLink to="skills" smooth={true} duration={500}>
                                <MenuItem>Habilidades</MenuItem>
                            </ScrollLink>
                            <ScrollLink to="projects" smooth={true} duration={500}>
                                <MenuItem>Projetos</MenuItem>
                            </ScrollLink>
                        </>
                    )}
                    {isMobile && (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenuClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleMenuClose}
                            >
                                <ScrollLink to="about" smooth={true} duration={500}>
                                    <MenuItem onClick={handleMenuClose}>About</MenuItem>
                                </ScrollLink>
                                <ScrollLink to="skills" smooth={true} duration={500}>
                                    <MenuItem onClick={handleMenuClose}>Skills</MenuItem>
                                </ScrollLink>
                                <ScrollLink to="projects" smooth={true} duration={500}>
                                    <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
                                </ScrollLink>
                            </Menu>
                        </>
                    )}
                </StyledToolbar>
            </AppBar>
        </>
    );
};

export default NavBar;
