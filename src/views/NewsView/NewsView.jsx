import React from "react"
import NewsItem from "../../components/NewsItem/NewsItem"

const NewsView = (props) => {
    return <div className="view-wrapper">
        {props.items ? props.items.map((item, index) => <NewsItem key={index} {...item} / >) : <div>no data to show</div>}
    </div>
}

export default NewsView 