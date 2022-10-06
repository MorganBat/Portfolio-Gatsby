import React from "react"

import { Link } from "gatsby"

import styles from '../styles/Header.module.css'

console.log(styles)

const Header = () => (
  <header className={styles.header}>
    <span className={styles.headerLeft}>
      <Link to="/" 
      className={styles.link} 
      activeClassName="headerActive"
      >
        Morgan Batterham
      </Link>
    </span>

    <span className={styles.headerRight}>
      <Link to="/about" 
      className={styles.link} 
      activeClassName="headerActive"
      >
        About Morgan
      </Link>
      
      <Link to="/portfolio" 
      className={styles.link} 
      activeClassName="headerActive"
      >
        Morgan's Portfolio
      </Link>
      
      <Link to="/contact" 
      className={styles.link} 
      activeClassName="headerActive"
      >
        Contact Morgan
      </Link>
    </span>
  </header>
)

export default Header
