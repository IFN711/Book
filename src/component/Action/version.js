import Navibar from '../layout/Navi'
import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";


export default function Version(props){
    const { register, handleSubmit } = useForm();
    const title=props.match.params.title;
    const onSubmit = data => {
        console.log(data);
    };
    const data=[
        {
            title:{title},
            language:'English',
        },
        {
            title:{title},
            language:'Lao',
        },
        {
            title:{title},
            language:'Tetun',
        },

    ]
    return(
        <div>
            <Navibar />
            <div style={topcontainer}>
                <Typography component="h1" variant="h2" align="center" style={{ color: 'white' }} >
                    Exist version
                </Typography>
                <Typography variant="h5" align="center" style={subheadding} >
                    In this page, you can check the whether the book was translated already
                </Typography>
                <div style={{display:'flex'}}>
                    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} style={{ display: 'inline-block', marginLeft: "20%", marginTop: '20px', marginBottom: '-15px' }}>
                        <input style={input_field}
                            name="Lanugage"
                            ref={register}
                            placeholder="Lanugage Check"
                        />
                        <Button type='submit' style={{ marginLeft: '30px',borderRadius:'20px' }}>Check</Button>
                    </form>
               
                    
                <Link to={`/textarea/${title}`} >
                <Button style={{ width:'100%',marginLeft: '25%',marginTop:'27px',borderRadius:'20px',backgroundColor:'#AD1457',fontWeight:'bold' }}>Click Me To Translate</Button>
                </Link>
                </div>
                
               
            </div>
            <div style={{display:'flex',flexWrap:'nowarp',justifyContent:'space-around',width:'60%',marginTop:'30px',marginLeft:'auto',marginRight:'auto'}}>
                {data.map((version)=>(
                    <p style={{backgroundColor:'#CCFFCC',borderStyle:'solid',fontSize:'20px',borderColor:'#CC66CC',padding:'10px',borderRadius:'20px',width:'10%',textAlign:'center'}}>{version.language}</p>
                ))}
            </div>
  
        </div>
    )
}
const topcontainer={
    backgroundColor:'#273746',
    paddingTop:'100px',
    paddingBottom:'50px',
    paddingLeft:'300px',
    paddingRight:'300px',
    
}
const subheadding={
    color:'white',
    marginTop:'50px',
    marginLeft:'200px',
    marginRight:'200px'
}


const input_field = {
    width: '200px',
    marginLeft: '100px',
    color: 'white'
}