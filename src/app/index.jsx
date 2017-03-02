import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import './app.post.css';

const propTypes = {
    children: PropTypes.element.isRequired
};

export class App extends Component {

    render () {
        return (
            <div className="app">
                <div className="app__page">
                    {this.props.children}
                </div>
                <div className="app__footer">

                </div>
            </div>
        );
    }
}


App.propTypes = propTypes;


const mapStateToProps = () => ({}),
    ConnectedApp = connect(mapStateToProps)(App);


export default ConnectedApp;
