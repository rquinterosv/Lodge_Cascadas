import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

class Navbar extends Component {
    render(){
        return(

            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">
                    <Box display="flex" justifyContent="center">
                        <Link component={RouterLink} to="/" color="inherit" style={{ margin: '0 10px' }}>
                            Home
                        </Link>
                        <Link component={RouterLink} to="/about" color="inherit" style={{ margin: '0 10px' }}>
                            About
                        </Link>
                    </Box>
                </Typography>
              </Toolbar>
            </AppBar>
            
        )
    }
}

export default Navbar; 
