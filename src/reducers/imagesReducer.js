import actionTypes from '../actions/actionTypes'

export default (state = [], action)=>{

    switch (action.type) {
        case actionTypes.GET_IMAGES:
            return action.payload
            
        case actionTypes.GET_ALBUM_IMAGES:
            return action.payload

        case actionTypes.GET_ALBUMS:
            return action.payload
        default:
            return state
    }
}
