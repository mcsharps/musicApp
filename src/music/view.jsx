import React, { Component, PropTypes } from 'react';
// import * as actions from './actions';
// import { GET_MUSIC_LIBRARY_FUFILLED } from './action-types';
// look into html 5 tag figure for image stuff
import './musiclibrary.post.css';
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
        let mappedArtists,
            mappedTitles;

        return albums.payload
        .response.data.releases.map((cv, index) => {

            mappedArtists = cv.basic_information.artists.map((artist, i) =>
                <div key={i}> {artist.name}</div>);
            mappedTitles = <ul>
            <li> {cv.basic_information.title} </li>
            <img src={cv.basic_information.thumb} className="albums__images" />
            </ul>;

            return (<div className="albums__div" key={index}>
                {mappedArtists}
                {mappedTitles}
                </div>);
        });
    }
    render () {
            // albums not MusicReducer

        return (
            <div className="musicLibrary__div_container">
                <div>
                    {this.musicResults() || <div> loading fool </div>}
                </div>
            </div>
        );
    }
}


View.propTypes = propTypes;
