import './Banner4.css';
const SectionContent1 = (props)=>{
    return(
        <div className="banner4__section2-content1">
            <h2>{props.title}</h2>
            <p className="text-muted">{props.p}</p>
        </div>
    )
}

const SectionContent2 = (props)=>{
    return(
        <div className="banner4__section2-content2">
            <h2>{props.title}</h2>
            <p className="text-muted">{props.p}</p>
        </div>
    )
}

const SectionContent3 = (props)=>{
    return(
        <div className="banner4__section2-content3">
            <h2>{props.title}</h2>
            <p className="text-muted">{props.p}</p>
        </div>
    )
}

const SectionContent4 = (props)=>{
    return(
        <div className="banner4__section2-content4">
            <h2>{props.title}</h2>
            <p className="text-muted">{props.p}</p>
        </div>
    )
}
const Banner4 = ()=>{
    return(
        <article className='banner4'>
            <section>
                <div className='text-center section1-content'>
                    <h2>What We Do</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Veritatis eum modi, adipisci facilis.</p>
                </div>
            </section>
            <section className="banner4-section2 mt-5">
                <SectionContent1 title="Well Documented" p="Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."/>
                <SectionContent2 title="Highly Customizable" p="The point of using Lorem Ipsum is has a normal distribution of letters, as opposed to using."/>
                <SectionContent3 title="24/7 Support" p="There are many variations of but the majority have suffered alteration in some form."/>
                <SectionContent4 title="Community" p="If you are going to use a Ipsum, you need to be sure there isn't anything in the middle of text."/>
            </section>
        </article>

    )
}

export default Banner4;