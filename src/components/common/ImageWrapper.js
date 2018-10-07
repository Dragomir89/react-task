import React from 'react'
import './style.css'


export default (props) => {

    let {thumbnailUrl}  = props.details 
    let {details} = props

    return(
        <div className="col-lg-2 col-md-4 col-xs-6 image-wrapper">
             <div>
                 <p title={props.details.title} className='image-title'>
                     <span>Titile: </span>
                     <strong>{props.details.title}</strong>
                 </p>
             </div>
             <img className="img-fluid img-thumbnail" src={thumbnailUrl} alt="IMAGE"/> 
             
             {props.btnFn(props.clickEvent(details))}
        </div>        
    )
    
    
}

  