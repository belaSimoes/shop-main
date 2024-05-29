import React from 'react';
import styles from './header.module.css';

export default function Header () {
    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <div> <img src='sacola.png'></img> </div>
        <button className={styles.adicionarBotao}>adicionar produto</button>
        <p className={styles.marketing}>compre</p>
      </header>
    );
  }