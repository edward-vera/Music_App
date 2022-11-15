import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"

export default function Signin(props) {
  return (
    <Box
    // can change the element of the form
      component="form"
      sx={{
        display: 'grid',
        margin: '64px auto',
        gridGap: 8,
        maxWidth: 300
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required/>
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
      <Button variant="contained" onClick={() => props.setIsLoggedIn(true)}>Login</Button>
    </Box>
  );
}