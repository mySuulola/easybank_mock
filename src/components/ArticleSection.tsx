import React from 'react'


import currency from "../assets/images/image-currency.jpg"
import plane from "../assets/images/image-plane.jpg"
import restaurant from "../assets/images/image-restaurant.jpg"
import confetti from "../assets/images/image-confetti.jpg"

const articles = [
    {
        title: 'Receive money in any currency with no fees',
        author: 'Suulola Oluwaseyi',
        image: currency,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptas natus iure at reprehenderit rerum ipsam. Quia expedita, minima nihil, officia, tempora non sapiente doloremque quod perspiciatis incidunt ratione ab.'
    },
    {
        title: 'Treat yourself without worry about money',
        author: 'Suulola Oluwaseyi',
        image: restaurant,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptas natus iure at reprehenderit rerum ipsam. Quia expedita, minima nihil, officia, tempora non sapiente doloremque quod perspiciatis incidunt ratione ab.'
    },
    {
        title: 'Take your Easybank card wherever you go',
        author: 'Suulola Oluwaseyi',
        image: plane,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptas natus iure at reprehenderit rerum ipsam. Quia expedita, minima nihil, officia, tempora non sapiente doloremque quod perspiciatis incidunt ratione ab.'
    },
    {
        title: 'Out invite-only Beta accounts are now live!',
        author: 'Suulola Oluwaseyi',
        image: confetti,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptas natus iure at reprehenderit rerum ipsam. Quia expedita, minima nihil, officia, tempora non sapiente doloremque quod perspiciatis incidunt ratione ab.'
    },
]

function ArticleSection() {
    const displayedArticles = articles.map(article => (
        <div style={{
            minWidth: '16rem',
            // height: '100px'
        }} className="card mb-3 mx-4 p-0 col-12 col-md-2 border-white">
            <img height={200} src={article.image} className="card-img-top" alt="article" />
            <p className="card-text mt-3"><small className="text-muted pl-4">By {article.author}</small></p>
            <div className="card-body pt-0">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content}...</p>

            </div>
        </div>
    ));
    return (
        <div className="p-5 bg-light">
            <h4 className="px-3 py-2">Latest Article</h4>
           <div className="row">
           {displayedArticles}
           </div>
        </div>
    )
}

export default ArticleSection
