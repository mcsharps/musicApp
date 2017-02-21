import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


import './app.post.css';


const propTypes = {
    children: PropTypes.element.isRequired
};


export class App extends Component {

    render () {
        return (
            <div className="app">
                <nav className="app__nav">
                    <Link to="counter">Counter</Link>
                    <Link to="yason">Yason</Link>
                </nav>
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
