import React from 'react';
import './Footer.css'
class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : 'Bradigson',
            p : '2021 © Oliver. Design by ThemeBoss.',
            redes : 'Follow Us'
        }
    }
    render(){
        const OurProducts = ['Getbootstrap', 'Wordpress', 'Shopify', 'React'];
        const Company = ['About', 'Terms', 'Privacy Policy', 'Careers'];
        const Services = ['Documentation', 'Design', 'Themes', 'Illustrations', 'UI Kit'];
        const More = ['Documentation', 'License', 'Changelog'];
        return(
            <footer className=" p-4">
                <div className="footer-redesTitle ps-4">
                    <h4>{this.state.title}</h4>
                    <p className="text-muted">{this.state.p}</p>
                    <div>
                        <h5>{this.state.redes}</h5>
                        <div className='mt-4'>
                            <i className='bx bxl-facebook-circle'></i>
                            <i className='bx bxl-twitter' ></i>
                            <i className='bx bxl-linkedin-square' ></i>
                            <i className='bx bxl-google-plus' ></i>
                        </div>
                    </div>
                </div>

                   

                    <div className="footer-listas">
                        <ul>
                            <h6>Our Products</h6>
                            {
                                OurProducts.map(list1=>{
                                    return(
                                        <li key={list1.toString()}>
                                            <a href="">{list1}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul>
                            <h6>Company</h6>
                            {
                                Company.map(list2=>(
                                    <li key={list2.toString()}>
                                        <a href="">{list2}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul>
                            <h6>Services</h6>
                            {
                                Services.map(list3=>
                                    <li key={list3.toString()}>
                                        <a href="" >{list3}</a>
                                    </li>)
                            }
                        </ul>
                        <ul>
                            <h6>More</h6>
                            {
                                More.map(list4=>{
                                    return(
                                        <li key={list4.toString()}>
                                            <a href="">{list4}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
            </footer>
        )
    }
}

export default Footer;