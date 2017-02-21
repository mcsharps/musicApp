import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from './actions';
import View from './view';


const mapStateToProps = state => ({
    count: state.counter
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(View);


export default ConnectedCounter;
