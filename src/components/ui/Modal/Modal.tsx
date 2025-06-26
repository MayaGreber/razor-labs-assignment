import ReactDOM from "react-dom";
import React from "react";
import "./Modal.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
          {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
