import React from 'react';
import '../../App.css'
import tom from '../tom.jpg'
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { blue, green } from '@material-ui/core/colors';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import Navibar from '../layout/Navi';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        marginLeft:100,
        marginTop:20,
        borderRadius:20,
        height:500,
        backgroundColor: theme.palette.background.paper,
    },

    informatin:{
        border: '10px',
        borderColor:'black',
        borderRadius:30,
        backgroundColor:'#ABEBC6',
        width:'90%',
        marginLeft:'30px',
        marginTop:'8px',
        marginBottom:'8px',
    },

    btn:{
        backgroundColor:'#2E4053',
        borderRadius:30,
        color:'white',
    }

}));
export default function Profile() {
    const classes = useStyles();
    return (
        <div>
        <Navibar/>
        <div className='Profile-box'> 

            <div >
                <img className='Portrai' src={tom} alt='tom'/>
                <Button variant="contained" color="primary">change photh</Button>
            </div>
          
            <List className={classes.root}>
                <ListItem className={classes.informatin}>
                    <ListItemText primary="UserName" secondary="Tom" />
                    <Button variant="contained" className={classes.btn}>Edit</Button>
                </ListItem>
           
 
                <ListItem className={classes.informatin}>
                    <ListItemText primary="email" secondary="123456@qut.edu.au" />
                    <Button variant="contained" className={classes.btn}>Edit</Button>
                </ListItem>
   
                <ListItem className={classes.informatin}>
                    <ListItemText primary="First Language" secondary="English" />
                    <Button variant="contained" className={classes.btn}>Edit</Button>
                </ListItem>
                   
                <ListItem className={classes.informatin}>
                    <ListItemText primary="Second Language" secondary="Lao" />
                    <Button variant="contained" className={classes.btn}>Edit</Button>
                </ListItem>


                    <ListItem className={classes.informatin}>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkTwoToneIcon fontSize="large"  color="primary" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Translating" secondary="n" />
                    </ListItem>
                    <ListItem className={classes.informatin}>
                        <ListItemAvatar>
                            <Avatar>
                                <CheckCircleSharpIcon fontSize="large" style={{ color: green[500] }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Done" secondary="n" />
                    </ListItem>
            </List>

            </div>
            </div>
       
    )
}