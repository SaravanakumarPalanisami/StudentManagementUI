import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { SnackbarContent,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SnackbarComponent from './SnackBarComponent';



const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    SATscore: 0,
  });

 
  const [status,setStatus]=useState(false)
  const[snackbarOpen,setSnackbarOpen]=useState(false)
  const[resultData,setresultData]=useState(null)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose=()=>{
    setSnackbarOpen(false)
    setStatus(false)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
    const response = await axios.post('http://localhost:8080/insert', formData);
    setresultData(response.data)

    setStatus(response.data.success);

}
    catch (error) {
        console.error('Error deleting data:', error);
        setresultData({message:"Error in accessing the APIs",success:false});
        setStatus(false)
      } 
      finally {
        setSnackbarOpen(true);
      }
    
    
  };

  return (
    <>
    <h1 style={{ marginTop: '60px', fontFamily: 'system-ui', textAlign: 'center' }}>
            Insert Form
            </h1>
    <form onSubmit={handleSubmit}  style={{margin:'Auto',marginTop:'10px',width:'50vw',textAlign:'center'}}>
      <TextField
        label="Name"
        name="name"
    
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required

      />
      <TextField
        label="Pincode"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="SAT Score"
        name="SATscore"
        type="number"
        value={formData.SATscore}
        onChange={handleChange}
        fullWidth
        margin="normal"required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    {snackbarOpen&&<SnackbarComponent
  open={snackbarOpen}
  status={status}
  message={resultData?.message}
  handleClose={handleClose}
/>}
</>
)}

 
export default StudentForm;
