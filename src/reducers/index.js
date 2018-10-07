import {combineReducers} from 'redux'
import imagesReducer from './imagesReducer'
import favoritesImagesReducer from './favoritesImagesReducer'

export default combineReducers({    
   imagesReducer,
   favoritesImagesReducer
})
