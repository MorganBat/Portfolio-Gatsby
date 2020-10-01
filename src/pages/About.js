import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const About = () => (
    <Layout>
      <h1>About Page</h1>
      <p>About Morgan</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default About
