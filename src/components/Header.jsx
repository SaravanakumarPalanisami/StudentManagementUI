import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';

const navItems = ['Insert Entry', 'Delete Entry', 'Update Score', 'Get Rank', 'Get All Students'];


function DrawerAppBar() {


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        STUDENT MANAGEMENT SYSTEM
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`} key={item}>
                                <Button sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>



        </Box>
    );
}



export default DrawerAppBar;
