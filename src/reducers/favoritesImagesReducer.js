import actionTypes from '../actions/actionTypes'
import {reactLocalStorage} from 'reactjs-localstorage'

function removeFromFavotites(photo, allPhotos) {
    
    for (let i = 0; i < allPhotos.length; i++) {
        if(Number(allPhotos[i].id) === Number(photo.id)) {
            allPhotos.splice(i, 1)
            reactLocalStorage.set('favorites', JSON.stringify(allPhotos))
            return allPhotos
        }
    }

    return allPhotos
}

export default (state = [], action)=>{

    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            let newState = state.slice()
            newState.push(action.payload)
            return newState
            
        case actionTypes.GET_ITEMS_FROM_LOCAL_STORAGE:
            return action.payload
        
        case actionTypes.REMOVE_FROM_FAVORITES:
            return removeFromFavotites(action.payload, state).slice()

        default:
            return state
    }
}