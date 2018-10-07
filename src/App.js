import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import AlbumsPage from './components/HomePage/AlbumsPage'
import CurrentAlbum from './components/AlbumPage/CurrentAlbum'
import FavoriteWrapper from './components/FavotitePage/FavoriteWrapper'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
 

  render() {


    return (
      <div className="App">
       <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header/>
              <div className='content-wrapper'>
                <Route exact path="/" render={() => (
                  ( <Redirect to="/albums/1"/> ) 
                )}/>
                <Route path='/albums/:page' exact component={ AlbumsPage }/>
                <Route path='/album/:id' component={ CurrentAlbum } />
                <Route path='/favorites' component={ FavoriteWrapper } />
              </div>  
            
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
 


export default App
