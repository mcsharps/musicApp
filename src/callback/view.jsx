import React, { Component, PropTypes } from 'react';
// import * as actions from './actions';
// import { GET_MUSIC_LIBRARY_FUFILLED } from './action-types';
import './callback.post.css';

// It has to do with the actions and index mapping actions to dispatch..
const propTypes = {
    albums: PropTypes.shape({
        payload: PropTypes.shape({}),
        bearer: PropTypes.shape({})
    }),
    actions: PropTypes.shape({
        getCallbackToken: PropTypes.func
    })
};


export default class View extends Component {
    componentWillMount () {

        console.log(this.props);
        this.props.actions.getCallbackToken();
    }

    render () {
            // albums not MusicReducer

        return (
            <div className="musicLibrary__div_container">
                <div>
                    hello callback
                </div>
            </div>
        );
    }
}


View.propTypes = propTypes;
