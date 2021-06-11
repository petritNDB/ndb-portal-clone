import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Seo from "../components/seo"

export default function Home() {
  return (
    <Layout>
    <Seo title="Home"/>
        <Banner pageName="home"  bannerLink="/" />

      
      <div>NDB TECH</div>
    </Layout>
  )
}
