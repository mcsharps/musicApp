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
    constructor (props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.getBearer = this.getBearer.bind(this);
        this.authorizeLink = this.authorizeLink.bind(this);
    }
    componentWillMount () {
        // console.log(this.props);
    }
    handleChange (event) {
        this.setState({ value: event.target.value });
    }
    getBearer () {
        this.props.actions.getBearerToken(this.state.value);
    }
    authorizeLink () {
        const { albums } = this.props;

        if (albums.bearer === undefined) {
            return null;
        }
        console.log(albums.bearer);

        return (<a href={albums.bearer.response.authorize}>Please Authorize Discog!</a>);
    }
    render () {
        return (
            <div className="musicLibrary__div_container">
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
                    <div onClick={this.getBearer}> get authorize link </div>
                    {this.authorizeLink() || <div> </div>}
                </div>
            </div>
        );
    }
}


View.propTypes = propTypes;
