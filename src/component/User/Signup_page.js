import React from "react";

class Signup extends React.Component{
 state = {
     email:'',
     password:'',
     firstName:'',
     lastName:'',
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
            <div className='App-container'>
                <form onSubmit={this.handleSubmit}   className='white'>
                    <h5 className='gray-text text-draken-3'> </h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>password</label>
                        <input type='password' id='password' data-length="10" onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='firstName'>firstName</label>
                        <input type='text' id='firstName' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>lastName</label>
                        <input type='text' id='lastName' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-dephtn-0">Sign up</button>
                    </div>
                </form>
            </div>         
        )
    }
}

export default Signup