import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import styles from '../styles/404.module.css'

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p><Link to="/">Return to the index</Link></p>
  </Layout>
)

export default NotFoundPage
