import { Button } from '@mui/material';
import React, { ReactNode, MouseEvent } from 'react';

interface StyledButtonContactsProps {
  children: ReactNode;
  id?: string;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
}

const StyledButtonContacts: React.FC<StyledButtonContactsProps> = ({
  children,
  id,
  onClick
}) => {
  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={onClick}
        sx={{
          backgroundColor: '',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#19e360',
            transition: 'background-color 0.3s ease',
          },
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
          width: '100%',
          '& svg': {
            fontSize: '1.5rem', // Tamanho do ícone
          },
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default StyledButtonContacts;
