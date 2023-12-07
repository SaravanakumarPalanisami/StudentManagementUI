import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SnackBarComponent from './SnackBarComponent'; 


const DataTable = () => {
    const [data, setData] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [status, setStatus] = useState(false);

    const handleClose = () => {
        setSnackbarOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://adhesive-baseball-production.up.railway.app/getstudentlist');
                console.log(response)

                setData(response.data); 
                setSnackbarOpen(true);
                setStatus(true);
            } catch (error) {
                console.error('Error fetching data:', error);
                setSnackbarOpen(true);
                setStatus(false);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <TableContainer style={{ marginTop: '70px' }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{textTransform:'bold'}}>
                            {/* Add table header cells based on your data structure */}
                            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Address</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>City</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Country</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>PinCode</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>SAT Score</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {status&&data.data.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.city}</TableCell>
                                <TableCell>{row.country}</TableCell>
                                <TableCell>{row.pincode}</TableCell>
                                <TableCell>{row.satscore}</TableCell>
                                <TableCell>{row.status}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {snackbarOpen && <SnackBarComponent
                open={snackbarOpen}
                status={status}
                message={data?.message}
                handleClose={handleClose}
            />}
        </>
    );
};

export default DataTable;
