import React from 'react';

import ButtonShowModal from '../ButtonShowModal';
import Modal from '../Modal';

const Root = (props) => (
    !props.modal
        ? <ButtonShowModal />
        : <Modal />
);

export default Root;