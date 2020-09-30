import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p><Link to="/">Return to the index</Link></p>
  </Layout>
)

export default NotFoundPage
