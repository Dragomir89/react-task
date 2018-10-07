import React from 'react'

export default (props) => {

    return(
        <button 
            onClick={ props.clickEvent } 
            className={props.styleBtn}>
            {props.text} 
            {props.createIcon()}
        </button>
    )
}