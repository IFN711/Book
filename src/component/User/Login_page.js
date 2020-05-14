import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";



class Login extends React.Component{

 state = {

    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    
    render(){
        return(
            <div className="cover" >
                <center >
                    <img alt='logo' src={require('../../Library-for-All-Badge-Logo-Black-300x300.png')}  width='200px' height='200px'/>
                </center>

                <div className='App-container'style={{backgroundColor:'#121212'}}>
                    <form onSubmit={this.handleSubmit} autoComplete='off'  >
                        <h5 className='gray-text text-draken-3'> </h5>
                        <div className='input-field'>
                            <label htmlFor='email' >Email</label>
                        
                            <input className='input-data' type='email' id='email'  required  onChange={this.handleChange}/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>password</label>
                            <input className='input-data' type='password' id='password' required data-length="10" onChange={this.handleChange}/>
                        </div>
                    
                        <div style={{textAlign:"center"}}>
                            <Button  type='submit' href='home' variant="contained" color='primary' style={{width:'50%'}}>Log in</Button>
                        </div>
                        <FormControlLabel
                            control={<Checkbox value="remember"style={{color:'white'}} />}
                            label="Remember me"/>
                    </form>
                    
                        <Grid item>
                            <Link href="signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                            <Box mt={5} >
                                <Typography style={{color:'white'}} variant="body2" color="textSecondary" align="center">
                                    {'Copyright © '}
                                    <Link  href="https://libraryforall.org/">
                                        Library for all
                                    </Link>
                                    {' '}{new Date().getFullYear()}{'.'}
                                </Typography>
                            </Box>
                </div>      

            </div>
  
        )
    }
}

export default Login