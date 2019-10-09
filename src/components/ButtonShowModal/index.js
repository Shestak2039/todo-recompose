import { connect } from 'react-redux';

import { showModalAction } from '../../actions/modal-actions';

import ButtonShowModal from './ButtonShowModal';

const mapDispatchToProps = (dispatch) => (
    {
        showModal: () => {
            dispatch(showModalAction());
        }
    }
)

export default connect(null, mapDispatchToProps)(ButtonShowModal);