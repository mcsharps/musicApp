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
    }
    authorizeLink () {
        const { albums } = this.props;

        if (albums.bearer === undefined) {
            return null;
        }
        console.log(albums.bearer);

        return (<a href={albums.bearer.response.authorize}>Authorize!</a>);
    }
    render () {
        return (
            <div className="musicLibrary__div_container">
                <div>
                    Enter user name here <br />
                    {this.authorizeLink() || <div> loading authorizer</div>}
                </div>
            </div>
        );
    }
}


View.propTypes = propTypes;
