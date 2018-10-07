import React from 'react'


export default (props)=>{
    const style={
        fontSize: props.fontSize,
        color: props.color,
        margin: props.margin 
    }    

    const {iconType} = props

    return(
        <i className={iconType} style={style}></i>
    )
}