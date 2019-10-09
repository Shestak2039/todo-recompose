import React from 'react';

import ButtonShowModal from '../ButtonShowModal';
import Modal from '../Modal';

const Root = ({ modal }) => (
    !modal
        ? <ButtonShowModal />
        : <Modal />
);

export default Root;