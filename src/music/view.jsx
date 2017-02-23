import React, { Component, PropTypes } from 'react';
// import * as actions from './actions';
// import { GET_MUSIC_LIBRARY_FUFILLED } from './action-types';
import './musiclibrary.post.css';

// It has to do with the actions and index mapping actions to dispatch..
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
        this.props.actions.getBearerToken();
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
        .response.releases.map((cv, index) => {

            mappedArtists = cv.basic_information.artists.map((artist, i) =>
                <div key={i}> {artist.name}</div>);
            mappedTitles = <ul>
            <li> {cv.basic_information.title} </li>
            </ul>;

            return (<div key={index}>
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
                    {this.authorizeLink() || <div> loading authorizer</div>}
                </div>
            </div>
        );
    }
}


View.propTypes = propTypes;
