import React from "react";
import AppBar from '@mui/material/AppBar';
import './Heading.css'
import Typography from '@material-ui/core/Typography';
  

export default function Heading () {
   return(
    <AppBar className="Header" position="static" elevation={0} >
         <div>
          {/* <img class="add-modal-close" src="images/close.svg" height="20px"> */}
              <Typography variant="h5" >
                ABC Products
              </Typography>
              <Typography variant="h4" align="center">
                HighRadius
              </Typography>
         </div>
   </AppBar>
  )
}


