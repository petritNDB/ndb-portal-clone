import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Shop = () => {
  return (
    <Layout>
      <Seo title="Shop" />
      <Banner pageName="shop" />

      <div>
        <h1>Shop Page</h1>
      </div>
    </Layout>
  )
}

export default Shop
