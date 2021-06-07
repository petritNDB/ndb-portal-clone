import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Seo from "../components/seo"

export default function Home() {
  return (
    <Layout>
    <Seo title="Home"/>
        <Banner pageName="home"/>

      
      <div>NDB TECH</div>
    </Layout>
  )
}
