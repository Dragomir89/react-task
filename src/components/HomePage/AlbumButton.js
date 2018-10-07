import React from 'react'
import'./style.css'
import { Link } from 'react-router-dom'

export default (props)=>{

    return(  
        <div> 
        <section>
            <Link to={`/album/${props.albumId}`}><h1 className="pdding-6">{props.title}</h1></Link>
        </section>
        </div>
    ) 
}   
