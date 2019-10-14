import { compose } from 'recompose';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { show } from 'redux-modal';

import ButtonShowModal from './ButtonShowModal';
import { withHandlers } from 'recompose';

const mapDispatchToProps = dispatch => bindActionCreators({ show }, dispatch)

export default compose(
    connect(null, mapDispatchToProps),
    withHandlers({
        handleOpen: ({ show }) => (event) => {
            show('modal');
        }
    })
)(ButtonShowModal);