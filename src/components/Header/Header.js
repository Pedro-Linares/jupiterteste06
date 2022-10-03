import React from 'react'
import styles from './style.module.css'
const Header = ({title}) => {
const name = 'Flavio Martins'
  return (
    <header className={styles.header}>
      <div><h2>{title}</h2></div>
      <div className={styles.perfil}>
        <div>
          <p>Flavio Martins</p>
          <p>flaviomartins@gmail.com</p>
        </div>
        <div>
        <span className={styles.avatar}>
         {name.match(/\b(\w)/gi)}
        </span>
        </div>
      </div>
    </header>
  )
}

export default Header