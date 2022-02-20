import './Banner3.css';
import React from 'react';
import {Link} from 'react-router-dom';
import ImgSection2 from './imgs/Digital presentation-rafiki.svg';
import ImgSecttion3 from './imgs/Texting-rafiki.svg';


const Banner3Section2 = (props)=>{
    return(
        <section className="banner3-section2">
            <div className="section2-content">
                <h3>{props.title1}</h3>
                <h2>{props.title2}</h2>
                <p className='text-muted'>Create custom landing pages with Landik that converts<br/> more visitors than any website. With lots of unique<br/> blocks, you can easily build a page without coding.</p>
                <Link to="" className="btn btn-success section2__content-btn">Explore</Link>
            </div>
            <div className='section2-img'>
                <img src={props.imgS2} alt=""/>
            </div>
        </section>
    )
}



const Banner3Section3 = (props)=>{
    return(
        <section className="banner3-section3">
            <div className="secion3-img">
                <img src={props.imgS3} alt=""/>
            </div>
            <div className='section3-content'>
                <h3>{props.title1}</h3>
                <h2>{props.title2}</h2>
                <p>Create custom landing pages with Landik that converts<br/> more visitors than any website. With lots of unique<br/> blocks, you can easily build a page without coding.</p>
                <Link to="" className="btn btn-success section3-btn">Explore</Link>
            </div>
        </section>
    )
}

class Banner3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            h1 : 'Explore About Our Awesome',
            hh1 : 'Features',
            p : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            pp : 'Veritatis eum modi, adipisci facilis.'

        }
    }

    render(){
        return(
            <article className='banner3'>
                <section className="banner3-section1 mt-4">
                    <div className="text-center section1-title"><h2>{this.state.h1}<br/>{this.state.hh1}</h2>
                    <p className="text-muted">{this.state.p}<br/>{this.state.pp}</p>
                    </div>
                </section>
                <section className="banner3-section2 mt-4">
                    <Banner3Section2 title1="PERFACT DESIGN" title2="It’s Everything You’ll Ever Need." imgS2={ImgSection2}/>
                    
                    <Banner3Section3 title1="USER INTERFACE" title2="Unlimited Features Awaiting For You." imgS3={ImgSecttion3}/>
                </section>

            </article>
        )
    }
}


export default Banner3;