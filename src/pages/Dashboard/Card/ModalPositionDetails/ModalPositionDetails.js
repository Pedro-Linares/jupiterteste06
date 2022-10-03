import React from 'react'
import styles from './style.module.css'

const ModalPositionDetails = ({id="modalPositionDetails", onClose = () => {}, children}) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }
  return (
    <div id={id}  className={styles.modalPositionDetails}  onClick={handleOutsideClick}>
      <div  className={styles.container}>
        <button onClick={() => onClose}className={styles.close} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default ModalPositionDetails