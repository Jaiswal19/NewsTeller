import React, { Component } from 'react'
import loading from './Loading_icon.gif'
export default class Load extends Component{
    render(){
        return(
           <div className='d-flex justify-content-center text-center'>
            <img src={loading} className=' d-flex justify-content-center ' style={{height:"75px"}}></img>
            </div>
        )
    }
}

