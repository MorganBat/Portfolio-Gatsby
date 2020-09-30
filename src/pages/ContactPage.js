import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Page</h1>
            <p>Contact</p>
            <Link to="/">Return Home</Link>
        </Layout>
    )
}

export default ContactPage