import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { SnackbarContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material';
import SnackbarComponent from './SnackBarComponent';


const DeleteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const [status, setStatus] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [resultData, setresultData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleClose = () => {
    setSnackbarOpen(false);
    setStatus(false);
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const result = await axios.delete(`http://localhost:8080/delete/?name=${formData.name}`);
        setresultData(result.data);
        setStatus(result.data.success);

        if (result.data?.success) setStatus(true);
      } catch (error) {
        console.error('Error deleting data:', error);
        setresultData({message:"Error in accessing the APIs",success:false})
        setStatus(false)
      } 
      finally{
        setSnackbarOpen(true)
      }
    
  };

  return (
    <>
        <h1 style={{ marginTop: '150px', fontFamily: 'system-ui', textAlign: 'center' }}>
            Delete Form
            </h1>
      <form
        onSubmit={handleSubmit}
        style={{ margin: 'Auto', marginTop: '10px', width: '50vw', textAlign: 'center' }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Delete
        </Button>
      </form>
      {snackbarOpen&&<SnackbarComponent
  open={snackbarOpen}
  status={status}
  message={resultData?.message}
  handleClose={handleClose}
/>}
    </>
  );
};

export default DeleteForm;
