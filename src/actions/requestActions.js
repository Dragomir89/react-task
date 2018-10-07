import axios from 'axios'
import actionTypes from './actionTypes'
import toastr from 'toastr'
import {reactLocalStorage} from 'reactjs-localstorage'

function setPhotoToLocalStarage(photo){
    let favorites = []
    const FAVORITES = 'favorites'

    if(!reactLocalStorage.get(FAVORITES)){
        favorites.push(photo)
        reactLocalStorage.set(FAVORITES, JSON.stringify(favorites))
        return
    }

    favorites = JSON.parse(reactLocalStorage.get(FAVORITES))
    favorites.push(photo)
    reactLocalStorage.set(FAVORITES, JSON.stringify(favorites))
}

export default {
    getImages:()=>{
        return (dispatch)=>{
            axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>{

                return dispatch({
                    type: actionTypes.GET_IMAGES,
                    payload: res.data
                })
            })
        }
    },

    getAlbumImages: (albumId)=>{
        return (dispatch) =>{
            axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then((res)=>{

                return dispatch({
                    type: actionTypes.GET_ALBUM_IMAGES,
                    payload: res.data
                })
            })
        }
    },

    addToFavorite: (photo)=>{

        return (dispatch)=>{
            toastr.success('Added to favorite')
            setPhotoToLocalStarage(photo)
            dispatch({
                type: actionTypes.ADD_TO_FAVORITES,
                payload: photo
            })
        }
    },

    getFavoritesFromLocalStorage: ()=>{
        return (dispatch)=>{

            dispatch({
                type: actionTypes.GET_ITEMS_FROM_LOCAL_STORAGE,
                payload: JSON.parse(reactLocalStorage.get('favorites'))
            })
        }
    },

    removeFromFavotes: (photo)=>{
        return (dispatch)=>{
            toastr.error('The Photo Was Removed')
            dispatch({
                type: actionTypes.REMOVE_FROM_FAVORITES,
                payload: photo
            })
        }
    },

    getAlbums: ()=>{
        return (dispatch) =>{
            axios.get(`https://jsonplaceholder.typicode.com/albums`).then((res)=>{
                console.log(res.data)
                return dispatch({
                    type: actionTypes.GET_ALBUMS,
                    payload: res.data
                })
            })
        }
    }
}
