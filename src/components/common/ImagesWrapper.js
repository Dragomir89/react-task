import React from 'react'
import ImageWrapper from './ImageWrapper'



export default (props) =>{

    let images = props.images.map((e,i)=>{
        return <ImageWrapper key={i} details={e} btnFn={props.btnFn} clickEvent={props.clickEvent}/>
    })
    return(
        <div className="container">
            <div className="row text-center text-lg-left">
                {images}
            </div>
            
        </div>
    )
}