import classes from "./Modal.module.scss";
import React, {useEffect} from "react";
import {createPortal} from "react-dom";

const modalRoot = document.querySelector("#modal-root")

const Modal = ({children, closeModal}) => {

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal()
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal()
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])


  return createPortal(
    <div className={classes.modal}>
      <div className={classes.modal_overlay} onClick={handleBackdropClick}>
      </div>
      <div className={classes.large_img_container}>
        {children}
      </div>
    </div>,
    modalRoot
  )
}
export default Modal
