import { connect } from 'react-redux';

import Root from './Root';

const mapStateToProps = (state) => (
    {
        modal: state.modalState.modal
    }
)

export default connect(mapStateToProps)(Root);