import React, { Component } from 'react';
import iframe from 'react-iframe'
class A extends Component {
    // xxx;
    
    render(){
        // console.log(this.props.lid)
        return(
        <div style={{width:"100%",height:"100%"}}>
        <div style={{height:"95%"}}>
        <div className="text_content">
        <Col className="view_Form">
        <iframe style={{border:0,width:"100%",height:630,}} src="/Form_content/common/finalyForm.html"/>
        </Col>
        <Col className="fileBot" style={{textAlign:"right",}}>
        <Button onClick={this.onDown.bind(this)} style={{marginRight:20,}}>下载</Button>
        <Button onClick={this.goBack.bind(this)} type="primary">返回</Button>
        </Col>
        </div>
        </div>
        </div>
        )
        }
    }