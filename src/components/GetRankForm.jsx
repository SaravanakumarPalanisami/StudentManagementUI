import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import SnackBarComponent from './SnackBarComponent'; // Import your Snackbar component

const GetRankForm = () => {
  const [name, setName] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [resultData, setResultData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://adhesive-baseball-production.up.railway.app/getrank/?name=${name}`);
      setStatus(response.data.success);
      setResultData(response.data);
    } catch (error) {
      console.error('Error fetching rank:', error.message);
      setStatus(false);
      setResultData({ message: 'Error fetching rank', success: false });
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleClose = () => {
    setSnackbarOpen(false);
    setStatus(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ margin: 'auto', marginTop: '70px', width: '50vw', textAlign: 'center' }}>
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {status && (
          <TextField
            label="Rank"
            name="rank"
            value={resultData?.data}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            margin="normal"
          />
        )}
        <Button type="submit" variant="contained" color="primary">
          Get Rank
        </Button>
        
      </form>
      {snackbarOpen&&<SnackBarComponent
  open={snackbarOpen}
  status={status}
  message={resultData.message}
  handleClose={handleClose}
/>}
    </>
  );
};

export default GetRankForm;
