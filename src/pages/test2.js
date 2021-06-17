import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Article from "../components/article"
import { news } from "../pages/news/Data"

const Page = () => {
  // Array of all news articles
  const allNews = news

  // State for the list
  const [list, setList] = useState([...allNews.slice(0, 10)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > 10)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allNews.length
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <div>
      <h1>Load more demo</h1>
      <div>
        {list.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.datePosted}</p>
            <p>{article.author}</p>
          </div>
        ))}
      </div>
      {hasMore ? (
        <button onClick={handleLoadMore}>Load More</button>
      ) : (
        <p>No more results</p>
      )}
    </div>
  )
}

export default Page
