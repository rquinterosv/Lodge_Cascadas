import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import logo from '../img/logo.png'

class Menu extends Component {
    render(){
        return(
            <div>
                <AppBar class="menu" position="static">
                    <Toolbar className="items">
                        <Box className="image">
                            <img className="my-image" src={logo} alt="LogoLC" />
                        </Box>
                    <Typography variant="h6">
                        <Box className="options">
                            <NavLink className="option" to="/"  exact>Home</NavLink>
                            <NavLink className="option" to="/about" >About</NavLink>
                        </Box>
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default Menu; 
