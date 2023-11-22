import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SnackbarComponent = ({ open, status, message, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <SnackbarContent
        style={{ backgroundColor: status ? 'green' : 'red' }}
        message={message}
        action={
          <IconButton size="small" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default SnackbarComponent;
