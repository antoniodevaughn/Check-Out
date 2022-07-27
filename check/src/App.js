//Login.js
import Stack from '@mui/material/Stack';
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Button, Typography, Link,Checkbox, FormControlLabel } from "@mui/material";

const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "120vh",
        width: 600,
        margin: "20px auto"
    }


    const btnstyle={
        
        borderRadius: 25,
        
    }
        const textfield={
            margin: "10px"
        }
        
    return(
        
        
         <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <html>
                    <body>
                <h1>Check Out</h1>
                </body>
                </html>
               
                </Grid> 
                
                <TextField label="Donation" placeholder="Amount"required></TextField>
                <p></p>
                Total: ****
                <p></p>
                
        <TextField label="Username or Email Address" placeholder="Enter Username" fullWidth required></TextField>
        <p></p>
        <Stack spacing={9} direction="row">
        <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
            />}
            label="PayPal"
            />
            <p></p>
            <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
            />}
            label="Venmo"
            />
            <p></p>
            <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
            />}
            label="CashApp"
            />
            
           
            <p></p>
            </Stack>
            <p></p>
            <TextField label="Name on Card" placeholder="Enter Name" fullWidth required></TextField>
            <p></p>
            <TextField label="Card Number" placeholder="Enter Number" fullWidth required></TextField>    
            <p></p>
            <TextField label="Expiry Date" placeholder="MM/YY" required></TextField>
            <p></p>
            <TextField label="Security Code" placeholder="Enter Code" required></TextField>
            <p></p>
            <TextField label="Zip/Postal Code" placeholder="Enter Zip Code" fullWidth required></TextField>
            <p></p>
            <Button
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                >
                   Confirm
            </Button>
           
        <p></p>

        <Grid align="center">
                <html>
                    <body>
               Thank you so much for your generosity, your donation is greatly appreciated. Have a blessed day.
                </body>
                </html>
               
                </Grid> 
                <Typography style={textfield}>
                    <Link href= "#">
                    <Grid align = "center">
                   
                   
                    </Grid>
                        
                    </Link>
              
            </Typography>
            
            
            
        </Paper>
        </Grid>
    )
}

export default Login;
