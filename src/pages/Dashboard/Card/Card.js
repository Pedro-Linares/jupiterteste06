import React from 'react'
import styles from './styles.module.css'





const Card = ({ id, titlePosition, priority}) => {


  return (
    <div className={styles.card}>
      <h4>{id} - {titlePosition}</h4>
      <div className={styles.userCard}>
          <span className={styles.avatar}>
            {titlePosition.match(/\b(\w)/gi)}
          </span>
      </div>     
    <span  className={priority.toLowerCase() === 'urgent' ?  (styles.priorityUrgent):(styles.priority)}>
      <p>
        {priority}
      </p>
    </span>
  </div >
  )
  
}

export default Card