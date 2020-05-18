
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useForm } from "react-hook-form";
import { Button, Table } from 'react-bootstrap';
import Navibar from '../layout/Navi'
import {Link} from 'react-router-dom'

export default function Translate() {


    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    const data=[
        {
            title:'How The Rooster Found His Sound',
            level:'1',
        },
        {
            title:'20 Busy Little Ants',
            level:'1',
        },
        {
            title:'Tahlia the Tortoise',
            level:'1',
        },

    ]

    return (
        <div>
            <Navibar />
            <div style={topcontainer}>
                <Typography component="h1" variant="h2" align="center" style={{ color: 'white' }} >
                    Book available
                </Typography>
                <Typography variant="h5" align="center" style={subheadding} >
                    In this page, you can select a book to translate
                </Typography>
                <div >
                    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} style={{ display: 'inline-block', marginLeft: "10%", marginTop: '20px', marginBottom: '-15px' }}>
                        <input style={input_field}
                            name="title"
                            ref={register}
                            placeholder="Input Title" />

                        {/* <input style={input_field}
                            name="Target_language"
                            ref={register}
                            placeholder="Input Target Language" /> */}

                        <input style={input_field}
                            name="Level"
                            ref={register}
                            placeholder="Input Level"
                        />
                        <Button type='submit' style={{ marginLeft: '30px',borderRadius:'20px' }}>Search</Button>

                    </form>
                </div>


            </div>
            <div style={{borderStyle:'solid',borderColor:'#336633',width:'40%',marginLeft:'auto',marginRight:'auto',borderRadius:'20px',borderWidth:'7px',marginTop:'20px'}} >
            <Table striped bordered hover variant="dark" style={{width:'60%',marginLeft:'20%'}}>
                <thead>
                    <tr style={{fontSize:'20px'}}>
                     
                        <th>Title</th>
                        <th>Level</th>

                    </tr>
                </thead>
                <tbody>
                   
                        {data.map(book=>(
                            
                            <tr>
                            <td style={{fontWeight:'bold'}}><Link to={`/version/${book.title}`}>{book.title}</Link></td>
                            <td>{book.level}</td>
                            </tr>
                        ))}
       
                
    
                </tbody>
            </Table>
            </div>

        </div>
    )
}




const topcontainer = {
    backgroundColor: '#273746',
    paddingTop: '100px',
    paddingBottom: '50px',
    paddingLeft: '300px',
    paddingRight: '300px',

}

const subheadding = {
    color: 'white',
    marginTop: '50px',
    marginLeft: '200px',
    marginRight: '200px'
}

const input_field = {
    width: '200px',
    marginLeft: '100px',
    color: 'white'
}