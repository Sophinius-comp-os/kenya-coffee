"use client"
import ReactModal from 'react-modal';
import MultiStepForm from './MultiStepForm';

ReactModal.setAppElement(document.body);

const Modal = ({ isOpen, onClose }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="Modal"
            overlayClassName="Overlay"
        >
            <MultiStepForm onClose={onClose} />
        </ReactModal>
    );
};

export default Modal;