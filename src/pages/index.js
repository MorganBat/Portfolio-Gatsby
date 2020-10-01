import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Index = () => (
  <Layout>
    <h1>Index</h1>
    <Link to="/About">About</Link>
    <Link to="/Portfolio">Portfolio</Link>
    <Link to="/Contact">Contact</Link>
  </Layout>
)

export default Index
