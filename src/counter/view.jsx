import React, { Component, PropTypes } from 'react';


import './counter.post.css';


const propTypes = {
    count: PropTypes.number.isRequired,
    actions: PropTypes.shape({
        decrement: PropTypes.func.isRequired,
        increment: PropTypes.func.isRequired
    }).isRequired
};


export default class View extends Component {

    render () {
        const { count, actions: { increment, decrement } } = this.props;

        return (
            <div className="counter">
                <div className="counter__count">
                    Count: {count}
                </div>
                <button className="counter__action btn btn-primary" onClick={() => increment(1) }>
                    Increment
                </button>
                <button className="counter__action btn btn-secondary" onClick={() => decrement(1) }>
                    Decrement
                </button>
            </div>
        );
    }
}


View.propTypes = propTypes;
