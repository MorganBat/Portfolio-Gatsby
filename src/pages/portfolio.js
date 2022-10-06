import React from 'react'

import Layout from "../components/Layout"
import styles from '../styles/Portfolio.module.css'

const Portfolio = () => {
    return (
        <Layout>
            <div>
                <h1>Portfolio Page</h1>
            </div>
            <div>
                <h2>Fitr - Workout tracker</h2>
                Fitr was a project built for my final assessment while undertaking a coding bootcamp at Coder Academy. Build on a Ruby on Rails backend with a PostgreSQL database, the frontend was made in React.JS.
                <a href="https://fitr-frontend.netlify.app/" target='_blank'>Live Link</a>
            </div>
        </Layout>
    )
}

export default Portfolio