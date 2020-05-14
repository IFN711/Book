import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import title1 from './How The Rooster Found His Sound/552 English/552 How The Rooster Found His Sound_reflow/OEBPS/Images/cover.jpg';
import title2 from './20 Busy Little Ants/146English/146 20 Busy Little Ants_reflow/OEBPS/Images/cover.jpg';
import title3 from './Tahlia the Tortoise/527 English/527 Tahlia The Tortoise Finds An Umbrella_reflow/OEBPS/Images/cover.jpg'
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import { Input } from '@material-ui/core';
import {Link} from 'react-router-dom'
 

const info = [
 {
      img: title1,
      title: 'How The Rooster Found His Sound',
     author: 'abc',
   },
   {
       img:title2,
       title:'20 Busy Little Ants',
       author:'abc',
   },
   {
    img:title3,
    title:'Tahlia the Tortoise',
    author:'abc',
}
  ];

  function Searchbar(props){
    const [search, setSearch] = useState("");

    return (
      <div>
        <Input  
          
          style={{width:'80%',color:'black',fontWeight:"bold"}}
          placeholder="Search some book here..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              if (props.onSubmit) {
                props.onSubmit(search);
              }
            }
          }}
        />
        <span style={{position:"relative"}}><Button variant="contained" width='15%' float='right'
          onClick={e => {
            if (props.onSubmit) {
              props.onSubmit(search);
            }
          }}
        >
          
          Search
        </Button>
        </span>
      </div>
    )
  }

export default function TitlebarGridList() {
  const classes = useStyles();
  const [search,setSearch]=useState()

  return (
    <div>
        <div style={topcontainer}>
        <Typography component="h1" variant="h2" align="center" style={{color:'white'}} >
              Libarary For All
            </Typography>
            <Typography variant="h5" align="center" style={subheadding} >
                introducion introducion introducion introducion introducion introducion introducion introducion introducion introducion introducion introducion introducion 
            </Typography>
        </div>
        <div className='Seachbar'>
          <Searchbar onSubmit={newSearch => setSearch(newSearch)} />
        </div>
        

        <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList} cols={7}>

            {info.map((info) => (
            <GridListTile key={info.img}>
                <img src={info.img} alt={info.title} />
                <GridListTileBar
                title={info.title}
                subtitle={<span>by: {info.author}</span>}
                actionIcon={
                  <Link to={`/book/${info.title}`} >
                    <Button 
                          
                    variant="contained"
                    color="default"
                    size="small"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}>
                        Start
                    </Button>
                    </Link>
                }
                />
            </GridListTile>
            ))}
        </GridList>
        </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      clear:'both',
      display: 'flex',
      flexWrap: 'wrap',
      justify: 'flex-start',
      overflow: 'hidden',
    },
    search: {
      border:'10px',
      borderColor:'blue'
      },


    gridList: {
      width: '100%',
      height: 750,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  
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

