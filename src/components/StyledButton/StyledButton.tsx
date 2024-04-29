import { styled } from "@mui/material"
import { ReactNode } from "react"

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

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: "#19e360",
            transition: "background-color 0.3s ease"
        },
        cursor: "pointer",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        '& svg': {
            fontSize: '1.2rem', // Tamanho do ícone
          },

    }))

    return (
        <StyledButton onClick={downloadFile}>
            {children}
        </StyledButton>
    )
}

export default StyledButton