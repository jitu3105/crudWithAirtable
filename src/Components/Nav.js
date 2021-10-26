import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton} from '@material-ui/core'

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          property management system
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}