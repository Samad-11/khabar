import React from 'react'
import NewsCard from './NewsCard'

const MainBody = ({ news, heading }) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="display-6 fw-bold text-center text-decoration-underline">{heading.toUpperCase()}</div>
            </div>
            <div className="row my-2 gap-1 mx-auto">
                {
                    news.map((item: any) => {

                        if (item.urlToImage != null) {
                            return <NewsCard key={item.url} title={item.title} image_url={item.urlToImage} description={item.description} category={item.publishedAt}></NewsCard>
                        }

                    })
                }
            </div>
        </div>
    )
}

export default MainBody