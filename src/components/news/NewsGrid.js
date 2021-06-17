import React, { useEffect, useState } from "react"
import NDBWrapper from "../wrapper"
import loadMoreImg from "../../assets/images/icons/loadMore.png"

const NewsGrid = ({ news }) => {
  //? Array of all the news
  const allNews = news

  //? State for the list
  const [list, setList] = useState([...allNews.slice(0, 9)])

  //? State to trigger load more
  const [loadMore, setLoadMore] = useState(false)

  //? State of weather there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > 9)

  //? Load mre button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  //? Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allNews.length
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + 9)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  //? Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length
    setHasMore(isMore)
  }, [list])

  return (
    <NDBWrapper>
      <div className="news-grid">
        {list.map((article, index) => {
          const { author, title, newsImg, datePosted, newsUrl } = article
          return (
            <div className="news-grid__item" key={index}>
              <img src={newsImg} alt="news img" />
              <div className="news-grid__content">
                <p className="author">{author}</p>
                <a href={newsUrl} className="title">
                  {title}
                </a>
              </div>
              <p className="news-grid__publishedDate">{datePosted}</p>
            </div>
          )
        })}
        {hasMore ? (
          <button onClick={handleLoadMore} className="load-more">
            <img src={loadMoreImg} alt="" />
          </button>
        ) : (
          ""
        )}
      </div>
    </NDBWrapper>
  )
}

export default NewsGrid
