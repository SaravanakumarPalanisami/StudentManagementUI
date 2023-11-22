import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import SnackBarComponent from './SnackBarComponent';

const UpdateScoreForm = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [resultData, setResultData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/update/?name=${name}&score=${score}`);
            setResultData(response.data);
            console.log(resultData)
            setStatus(response.data.success);

        } catch (error) {
            console.error('Error updating score:', error.message);
            setStatus(false);
            setResultData({ message: 'Error updating score', success: false });
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
                <TextField
                    label="Score"
                    name="score"
                    type="number"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Score
                </Button>
            </form>
            {snackbarOpen && <SnackBarComponent
                open={snackbarOpen}
                status={status}
                message={resultData.message}
                handleClose={handleClose}
            />}
        </>
    );
};

export default UpdateScoreForm;
