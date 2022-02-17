import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Banner1.css';

const Banner1 = (props)=>{
    const [bannerI, setBannerI] = useState({
        h1 : 'Powerfull Analytics',
        h1P2 :  'Tools For Your Business.',
        p : 'It is a long established fact that a reader',
        pP2 : 'by the readable content of a page when looking at its layout.'
    })
    return(
        <article className="banner1-article">
            <section className="benner1__article-section">
                <div className="benner1__article__section-content-1 text-center">
                    <h2>{bannerI.h1}<br/>{bannerI.h1P2}</h2>
                    <p className="text-muted mt-4">{bannerI.p}<br/>{bannerI.pP2}</p>
                </div>
                <div className="benner1__article__section-content-2 text-center mt-4">
                    <Link to="" className="btn btn-success">Get Started</Link>
                </div>

            </section>
        </article>
    )
}

export default Banner1;