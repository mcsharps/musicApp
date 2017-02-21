import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from './actions';
import View from './view';


function mapStateToProps (state) {
    return {
        isEnabled: state.yasonified
    };
}


function mapDispatchToProps (dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}


const Yason = connect(mapStateToProps, mapDispatchToProps)(View);


export default Yason;
