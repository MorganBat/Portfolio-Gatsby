import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle='Morgan Batterham - Full Stack Web Developer' />
      <div className="layoutBody">
        <main>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()}, <a href="https://linktr.ee/MorganBat" target="_blank" className={styles.footerLink}>Morgan Batterham</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
