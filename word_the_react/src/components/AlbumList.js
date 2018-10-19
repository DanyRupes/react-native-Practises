import React, {Component} from 'react';
import { View,ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './albumDetails';

class albums extends Component {
    state = { albums: [] }

    // automatically rendered
    componentWillMount(){
        console.log("Logged Auto")
        // return promise
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((result) => {
            // console.log(result)
            // passing an object albums ... value result.data
            // setState automatically fetch this is an class based component
            // only way for updating state
            this.setState({
                albums : result.data
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    renderAlbums(){
        return this.state.albums.map(album=>
            <AlbumDetails album={album} key={album.title}></AlbumDetails>
        )
    }
 
    render(){
        console.log(this.state)
        return (
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
        )
    }
}

export default  albums;