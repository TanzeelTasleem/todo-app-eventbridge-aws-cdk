import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Todo } from "../components/Todo/todo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Todo/>
  </Layout>
)

export default IndexPage
