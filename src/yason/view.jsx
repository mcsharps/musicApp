import React, { Component, PropTypes } from 'react';


import './yason.post.css';
import './yason-enabled.post.css';
import { hipsterLorem, lorem } from './lorem';


const propTypes = {
    isEnabled: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
        toggle: PropTypes.func.isRequired
    }).isRequired
};


export default class YasonView extends Component {

    render () {
        const { isEnabled, actions: { toggle } } = this.props;

        return (
            <div className={`yason ${isEnabled ? 'yason--enabled' : ''}`}>
                <div className="yason__status">
                    Yasonified: {isEnabled.toString()}
                </div>
                <div className={`yason__lorem ${isEnabled ? 'yason__lorem--hipster' : ''}`}>
                    { isEnabled ? hipsterLorem : lorem }
                </div>
                <button className="yason__action btn btn-secondary" onClick={() => toggle() }>
                    { isEnabled ? 'Disable' : 'Enable' }
                </button>
            </div>
        );
    }
}


YasonView.propTypes = propTypes;
