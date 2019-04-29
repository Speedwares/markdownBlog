import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About page"/>
    <h1>
      About Page
    </h1>
    <p>This is just a blog About page in Gatsbyjs</p>
    <Link to="/"> Go Back</Link>

  </Layout>
  )

export default AboutPage
