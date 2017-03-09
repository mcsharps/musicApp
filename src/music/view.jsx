import React, { Component, PropTypes } from 'react';
// import * as actions from './actions';
// import { GET_MUSIC_LIBRARY_FUFILLED } from './action-types';
// look into html 5 tag figure for image stuff
import './musiclibrary.post.css';
import AlbumIcon from './component/AlbumIcon';
const propTypes = {
    albums: PropTypes.shape({
        payload: PropTypes.shape({}),
        bearer: PropTypes.shape({})
    }),
    actions: PropTypes.shape({
        getBearerToken: PropTypes.func,
        getMusicLibrary: PropTypes.func,
        sendtoAuthorize: PropTypes.func
    })
};


export default class View extends Component {
    componentWillMount () {

        console.log(this.props);
        this.props.actions.getMusicLibrary();
    }
    authorizeLink () {
        const { albums } = this.props;

        if (albums.bearer === undefined) {
            return null;
        }
        console.log(albums.bearer);

        return (<a href={albums.bearer.response.authorize}>Authorize!</a>);
    }
    musicResults () {
        const { albums } = this.props;

        if (albums.payload === undefined) {
            return null;
        }
        let mappedArtist,
            mappedTitle,
            mappedImage;

        return albums.payload
        .response.data.releases.map((cv, index) => {

            mappedArtist = cv.basic_information.artists.map((artist, i) =>
                <div key={i}> {artist.name}</div>);
            mappedImage = <li>
                <img src={cv.basic_information.thumb} className="albums__images" />
            </li>;
            mappedTitle = <li> {cv.basic_information.title} </li>;

            return (<div className="albums__div" key={index}>
                <ul>
                {mappedImage}
                {mappedArtist}
                {mappedTitle}
                </ul>
                </div>);
        });
    }
    render () {
            // albums not MusicReducer

        return (
            <div className="musicLibrary__div_container">
                    {this.musicResults() || <AlbumIcon />}
            </div>
        );
    }
}


View.propTypes = propTypes;
