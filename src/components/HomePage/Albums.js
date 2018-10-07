import React from 'react'
import AlbumButton from './AlbumButton'



export default (props)=>{
    
    let albums = props.albums.map((e,i)=>{
        return <AlbumButton key={i} albumId ={e.id} title={e.title}/>
    })


    return(
        <div className='albums-wrapper'>
            { albums }
        </div>
        
    )

}
