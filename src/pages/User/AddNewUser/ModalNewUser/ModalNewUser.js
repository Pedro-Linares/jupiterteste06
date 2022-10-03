import React from 'react'
import styles from './ModalNewUser.module.css'

function ModalNewUser ({ id = "modal", onClose = () => {}, children }) {
  const handleOutsideClick = (e) => {
    if(e.target.id == id) onClose();
  }


  return(
    <div id={id} className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <button className={styles.close} onClick={onClose}><span>X</span></button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default ModalNewUser