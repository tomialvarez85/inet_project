import React from "react";

import "./Modal.css"

function Modal({ children, isOpen, closeModal }) {
    return(

        <div className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-content">
                <button className="modal-close" onClick={closeModal}>x</button>
                {children}
            </div>
        </div>

    );
}

export default Modal;