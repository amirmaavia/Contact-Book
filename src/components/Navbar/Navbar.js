import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Navbar = () => {
    return (
        <Container style={{paddingTop: "40px"}} >
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            CONTACT_BOOK
          </Typography>
        </Toolbar>
      </AppBar>
      </Container>
    )
}

export default Navbar
