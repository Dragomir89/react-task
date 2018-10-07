import React, { Component } from 'react'
import requestActions from '../../actions/requestActions'
import { connect } from 'react-redux'
import ImagesWrapper from '../common/ImagesWrapper'
import Button from '../common/Button'
import Icon from '../common/Icon'


class CurrentAlbum extends Component {
    constructor(props){
        super(props)

        this.state = {
            albumImages:[]
        }
    }

    componentDidMount(){
        const albumId = this.props.match.params.id ? this.props.match.params.id : 1
        this.props.getImages(albumId)
    }

    componentWillReceiveProps(props){
        this.setState({albumImages: props.albumImages})
    }

    createIcon(){
        return <Icon 
            color='white' 
            margin='3px'
            fontSize='13px'
            iconType='fa fa-heart' 
        />
    }

    render(){
        return(
        <div>
            <ImagesWrapper 
            
                clickEvent={ (param) => {
                        return ()=>{ 
                            this.props.addToFavorite(param) 
                        }
                    }
                }
                images={this.state.albumImages} 
                btnFn={(clickEvent)=>{
                    return <Button 
                        text='Add to ' 
                        styleBtn='myButton' 
                        clickEvent={clickEvent} 
                        createIcon={this.createIcon}
                    />
                }
                
                }/>
        </div>
        )
    }
}

function mapStateToPops(state){
    return{
      albumImages: state.imagesReducer
    }
  }
  
  function mapDispatchToProps(dispatch){
    return {
        getImages: (albumId)=>{
            dispatch(requestActions.getAlbumImages(albumId))
        },
        addToFavorite: (photo)=>{
            dispatch(requestActions.addToFavorite(photo))
        }
    }
  }
  
  export default connect(mapStateToPops, mapDispatchToProps)(CurrentAlbum)