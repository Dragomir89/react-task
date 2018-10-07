import React, { Component } from 'react'
// import AlbumButton from './AlbumButton'
import Pagination from "react-js-pagination"
import Albums from './Albums'
import requestActions from '../../actions/requestActions'
import { connect } from 'react-redux'



class AlbumsPage extends Component {
    constructor(props){
        super(props)

        this.state = {         
          albums: [],
          albumsPerPage: 5,
          activePage: 1,
          currentAlbums:[]
        }

        this.handlePageChange = this.handlePageChange.bind(this)
    }
    componentDidMount(){
      this.props.getAlbums()
      const page = this.props.match.params.page ? this.props.match.params.page : 1
      this.setState({page})  
    }

    componentWillReceiveProps(props){
      const currentPage = Number(props.match.params.page)
      this.setState({
        activePage: currentPage,
        albums: props.albums
      })
      this.setCurrentAlbums(currentPage, props.albums)
    }
  

    setCurrentAlbums(page, albums){

      const startingAlbumNumber = (page * this.state.albumsPerPage) - this.state.albumsPerPage
      const currentAlbums = albums
        .slice(startingAlbumNumber, startingAlbumNumber + this.state.albumsPerPage)

      this.setState({currentAlbums})
      
    }

    handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber})
      const pathname = '/albums/' + pageNumber
      this.props.history.push({pathname})
    }

    render() {
      return (
          <div>
              <Albums albums={this.state.currentAlbums}/>
              <div className='pagination-position'>
              
                <Pagination 
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.state.albumsPerPage}
                  totalItemsCount={this.state.albums.length}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                />
              </div>
              
          </div>
      )
    }
}
 

function mapStateToPops(state){
  console.log(state)
  return{
    albums: state.imagesReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    getImages: ()=>{
      dispatch(requestActions.getImages())
    },
    getAlbums:()=>{
      dispatch(requestActions.getAlbums())
    }
  }
}

export default connect(mapStateToPops, mapDispatchToProps)(AlbumsPage)
