import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { bindActionCreators } from 'redux';

import { hide } from 'redux-modal';

import ButtonHideModal from './ButtonHideModal';

const mapDispatchToProps = dispatch => bindActionCreators({ hide }, dispatch)

export default compose(
    connect(null, mapDispatchToProps),
    withHandlers({
        handleHide: ({ hide }) => (event) => {
            hide('modal');
        }
    })
)(ButtonHideModal);