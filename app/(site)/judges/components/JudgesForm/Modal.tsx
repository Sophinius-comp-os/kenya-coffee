"use client"
import ReactModal from 'react-modal';
import MultiStepForm from './MultiStepForm';

ReactModal.setAppElement(document.body);

interface ModalProps {
    isOpen:boolean,
    onClose: () => void;
}
const Modal = ({ isOpen, onClose }:ModalProps) => {
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