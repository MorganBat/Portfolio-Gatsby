import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h1>Index</h1>
    <Link to="/AboutPage">About</Link>
    <Link to="/PortfolioPage">Portfolio</Link>
    <Link to="/ContactPage">Contact</Link>
  </Layout>
)

export default IndexPage
