import React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

const ComponentName = ({ data }) => (
  <div>
    {data.allMarkdownRemark.nodes.map(({ frontmatter,id }) => (
      <div>
        <h1>{id}</h1>
        <p>{frontmatter.author}</p>
        <p>{frontmatter.slug}</p>
        <p>{frontmatter.datePublished}</p>
        <p>{frontmatter.title}</p>
        <GatsbyImage
          image={frontmatter.newsImage.childImageSharp.gatsbyImageData}
          alt="fffff"
        />
      </div>
    ))}
  </div>
)

export const query = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(carousel)/"}}) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          slug
          datePublished
          author
          newsImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default ComponentName

// import React, { useState, useEffect } from "react"
// import { news } from "../pages/news/Data"

// import TabsWithCarousel from "../components/tabs-with-carousel/TabsWithCarousel"

// const test2 = () => {
//   return (
//     <div>
//       <TabsWithCarousel/>
//     </div>
//   )
// }

// export default test2

// const Page = () => {
//   // Array of all news articles
//   const allNews = news

//   // State for the list
//   const [list, setList] = useState([...allNews.slice(0, 10)])

//   // State to trigger oad more
//   const [loadMore, setLoadMore] = useState(false)

//   // State of whether there is more to load
//   const [hasMore, setHasMore] = useState(allNews.length > 10)

//   // Load more button click
//   const handleLoadMore = () => {
//     setLoadMore(true)
//   }

//   // Handle loading more articles
//   useEffect(() => {
//     if (loadMore && hasMore) {
//       const currentLength = list.length
//       const isMore = currentLength < allNews.length
//       const nextResults = isMore
//         ? allNews.slice(currentLength, currentLength + 10)
//         : []
//       setList([...list, ...nextResults])
//       setLoadMore(false)
//     }
//   }, [loadMore, hasMore]) //eslint-disable-line

//   //Check if there is more
//   useEffect(() => {
//     const isMore = list.length < allNews.length
//     setHasMore(isMore)
//   }, [list]) //eslint-disable-line

//   return (
//     <div>
//       <h1>Load more demo</h1>
//       <div>
//         {list.map((article, index) => (
//           <div key={index}>
//             <h3>{article.title}</h3>
//             <p>{article.datePosted}</p>
//             <p>{article.author}</p>
//           </div>
//         ))}
//       </div>
//       {hasMore ? (
//         <button onClick={handleLoadMore}>Load More</button>
//       ) : (
//         <p>No more results</p>
//       )}
//     </div>
//   )
// }

// export default Page
