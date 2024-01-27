import Image from 'next/image'
import React from 'react'

const NewsCard = ({ key, title, image_url, description, category, }) => {

    return (
        <div className="card mx-auto my-2   " style={{ width: '18rem' }}>
            <img src={image_url} alt={key} className="card-img-top" />
            <div className="card-body position-relative">
                <h5 className="card-title fw-semibold fs-6">{title}</h5>
                <p className="card-text ">{description && description.slice(0, 130)}<span className="cark-link "> <a href="">read more</a></span></p>
                <label className="badge text-bg-danger font-monospace position-absolute bottom-100 ">{category.slice(0, 10)}</label>
            </div>
        </div>

    )
}

export default NewsCard