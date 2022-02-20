import './Banner2.css';
import React from 'react';
import Banner2Img from './imgs/Writing room-pana.svg';




const Brands = (props)=>{
    return(
        <div className="banner2-brands mt-4 pb-4">
            <img src={props.BlackSwan} alt=""/>
            <img src={props.quadra} alt=""/>
            <img src={props.essence} alt=""/>
            <img src={props.generic} alt=""/>
        </div>
    )
}
class Banner2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="banner2">
                <div className="banner-img-1">
                    <img src={Banner2Img}alt="Banner2-img"/>
                </div>
                <Brands BlackSwan={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pdpMx88iiQAFQKvbhHGJBWvRKzHE-BFgBg&usqp=CAU"} 
                quadra={"https://qco.net/wp-content/uploads/sites/3/2020/09/quadra-logo-min.png"} 
                essence={"https://img2.freepng.es/20180426/stw/kisspng-cosmetics-eye-shadow-cruelty-free-essence-brand-5ae21bfbb43312.2614416815247677397381.jpg"} 
                generic={"https://t3.ftcdn.net/jpg/01/82/26/30/360_F_182263003_qetLxvmZtCA4SJ3mBragsnPLWeh1sC8Z.jpg"}/>
            </div>
        )
    }
}


export default Banner2;