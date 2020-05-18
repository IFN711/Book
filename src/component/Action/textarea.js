import Navibar from '../layout/Navi'
import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Text_area(props) {
    const title = props.match.params.title;
    const [value, setValue] = useState('');
    const handlesubmit = (e)=>{
        // e.preventDefault()
        console.log(value)
    }
    return (
        <div>
            <div>
                <Navibar />
            </div>
            <div style={topcontainer}>
                <Typography component="h1" variant="h2" align="center" style={{ color: 'white' }} >
                    {title}
                </Typography>
                <Typography variant="h5" align="center" style={subheadding} >
                    You are translating, You can save it in anytime. When you finish, click the 'Submit' button to submit
                </Typography>
            </div>
            <div style={{ display: 'flex' ,height:'500px',lexDirection: 'row',width:'70%',marginLeft:'auto',marginRight:'auto',marginTop:30 }}>
                <div className='container section Book-detail' style={{ flex: 1, backgroundColor: 'white' ,marginRight:'10px'}}>
                    
                        <div className='card z-depth-0'>
                            <div className='card-content'>
                                <span className='card-title'>{title}</span>
                                <p> (The content of book will be shown here)</p>

                            </div>
                        </div>
                        <div className='card-actions grey lighten-4 grey-text'>
                            <div>Posted</div>
                            <div>2020.01.01</div>
                        </div>
                </div>
                <form onSubmit={handlesubmit} style={{ flex: 1,height:'600px',marginLeft:'10px',marginTop:'-30px'}}>
                <label style={{color:'black',fontSize:'20px'}} >
          Your word:
          <textarea style={{height:'500px',borderStyle:'groove',borderWidth:'6px',borderColor:'#52BE80'}} value={value} onChange={e=>(setValue(e.target.value))}/>
        </label>
        <div style={{display:'flex',marginLeft:'-120px'}}>
        <Button type='submit' style={{marginRight:'10px'}}>Prev page</Button>
        <Button type='submit'style={{marginLeft:'10px'}}>Next page</Button>
        </div>
                </form>

            </div>
        </div>
    )
}

const topcontainer = {
    backgroundColor: '#273746',
    paddingTop: '50px',
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


