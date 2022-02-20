import './Banner5.css';

import React, {useState, useEffect} from 'react';
const Banner5Secton2Content1 = (props)=>{
    const [count1, setCount1] = useState(0);
    useEffect(()=>{
        setInterval(
            ()=>{setCount1((count1)=> count1 + 1)},1000
        )
    },[])
    return(
        <div className="banner5__section2-content1">
            <div><i className='bx bxs-star'></i></div>
            <div className='mt-4'><span><h3>{count1}{ count1 === 5 ? setCount1(0) : ''}.92/5</h3></span></div>
        </div>
    )
}


const Banner5Secton2Content2 = (props)=>{
    const [count2, setCount2] = useState(0);
    useEffect(()=>{
        setInterval(
            ()=>{setCount2((count2)=> count2 + 1)},100
        )
    },[])
    return(
        <div className="banner5__section2-content2">
            <div><i className='bx bxs-user' ></i></div>
            <div className='mt-4'><span><h3>{count2}{ count2 === 261 ? setCount2(0) : ''}K+</h3></span></div>
        </div>
    )
}

const Banner5Secton2Content3 = (props)=>{
    const [count3, setCount3] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setCount3((count3)=> count3 + 1)
        },1000)
    },[])
    return(
        <div className="banner5__section2-content3">
            <div><i className='bx bxs-download' ></i></div>
            <div className='mt-4'><span><h3>{count3}{count3 === 40 ? setCount3(0) : ''}K+</h3></span></div>
        </div>
    )
}


const Banner5Secton2Content4 = (props)=>{
    const [count4, setCount4] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setCount4((count4)=> count4 + 1)
        }, 1000)
    },[])
    return(
        <div className="banner5__section2-content4">
            <div><i className='bx bx-dialpad-alt' ></i></div>
            <div className='mt-4'>
                <span><h3>{count4}{count4 === 5 ? setCount4(0) : ''}.9M</h3></span>
            </div>
        </div>
    )
}

class Banner5 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            h2 : 'Hosts Like You, Worldwide',
            p : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.'
        }
    }
    
    render(){
        return(
            <article>
                <section className='text-center p-4 mt-5'>
                    <h2>{this.state.h2}</h2>
                    {this.state.p}
                </section>
                <section className="banner5-section2 mt-5">
                    <Banner5Secton2Content1/>
                    <Banner5Secton2Content2/>
                    <Banner5Secton2Content3/>
                    <Banner5Secton2Content4/>
                </section>
            </article>
        )
    }
}


export default Banner5;