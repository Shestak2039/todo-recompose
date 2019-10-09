import { connect } from 'react-redux';

import { hideModalAction } from '../../../actions/modal-actions';

import ButtonHideModal from './ButtonHideModal';

const mapDispatchToProps = (dispatch) => (
    {
        hideModal: () => {
            dispatch(hideModalAction());
        }
    }
)

export default connect(null, mapDispatchToProps)(ButtonHideModal);