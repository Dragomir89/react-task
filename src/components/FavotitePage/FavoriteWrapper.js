import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImagesWrapper from '../common/ImagesWrapper'
import Button from '../common/Button'
import requestActions from '../../actions/requestActions'
import Icon from '../common/Icon';

class FavoriteWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {favoritePhotos: props.favoritePhotos}
    }


    componentWillReceiveProps(props){
        this.setState({favoritePhotos: props.favoritePhotos})
    }

    componentDidMount(){
        if(this.props.favoritePhotos.length === 0){
            this.props.getFavorites()
        }
    }

    createIcon(){
        return <Icon 
            color='white' 
            margin='3px'
            fontSize='13px'
            iconType='fa fa-trash' 
        />
    }

    render(){
        return(
            <div>
                <h1>Favorite Photos</h1>

                <ImagesWrapper 
                    
                    clickEvent={ (param) => {
                            return ()=>{ 
                                this.props.removeFromFavotes(param) 
                            }
                        }
                    }
                    images={this.props.favoritePhotos} 
                    btnFn={(clickEvent)=>{
                        return <Button 
                            text='Remove' 
                            styleBtn='removeBtn' 
                            clickEvent={clickEvent} 
                            createIcon={this.createIcon}/>
                    }
            
            }/>

            </div>
        )
    }
}

function mapStateToPops(state) {
    // console.log(state)
    return{
        favoritePhotos: state.favoritesImagesReducer
    }
}
  
function mapDispatchToProps(dispatch){
    return {
        getFavorites: ()=>{
            dispatch(requestActions.getFavoritesFromLocalStorage())
        },
        removeFromFavotes: (photo) =>{
            dispatch(requestActions.removeFromFavotes(photo))
        }
    }
}
  
  export default connect(mapStateToPops,mapDispatchToProps)(FavoriteWrapper)