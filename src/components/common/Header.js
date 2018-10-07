import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item font-size-16px">
                <Link className="nav-link" to="/albums/1">Albums</Link>
              </li>
              <li className="nav-item font-size-16px">
                <Link className="nav-link" to="/favorites">My Favorites 
                  <Icon 
                    color='white' 
                    margin='3px'
                    fontSize='15px'
                    iconType='fa fa-heart' 
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}