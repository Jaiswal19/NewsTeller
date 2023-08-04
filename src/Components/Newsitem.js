import React, { Component } from 'react'
// import './style.css';
export class Newsitem extends Component {
  
  render() {
    let { title, description, imageUrl, Url,author,lastupdate } = this.props;
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className='im'>
          <img src={imageUrl} className="card-img-top adjust" alt="..." />
          </div>
        <div className="card" style={{backgroundColor:'black',color:'white'}}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text' ><small className='text-muted'>By  {!author ?"no-author":author} on {new Date(lastupdate).toGMTString()}</small></p>
          </div>
        </div>
        </div>
            <div style={{display:'flex',justifyContent:'end',margin:'1rem'}}>
            <a className="btn btn-success" href='/'style={{margin:'0rem 1rem'}} onClick={ ()=>{
      let utterance= new SpeechSynthesisUtterance(this.props.title);
      utterance.lang="en-GB";
      console.log(speechSynthesis.getVoices()[4]);
        //  utterance.voice=speechSynthesis.getVoices()[4];
        speechSynthesis.speak(utterance);
   }}>Text-to-speech</a>
            <a href={Url} className="btn btn-success"style={{margin:'0rem 1rem'}}>More News</a>
            </div>
      </div>
    )
  }
}

export default Newsitem
