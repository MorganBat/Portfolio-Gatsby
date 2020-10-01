import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/Layout"

const Portfolio = () => {
    return (
        <Layout>
            <div>
                <h1>Portfolio Page</h1>
                <p><Link to="/">Return Home</Link></p>
            </div>
        </Layout>
    )
}

export default Portfolio