import React from 'react'
import background from "../components/images/about_bg.png";
import "./about.css"
const About = () => {
    return (
        <div className='about__container'>
            <div className='about__header'>
                <div className='about__header__left'>All About TSB</div>
                <div className='about__header__right'><p>We have been serving irresistible comfort food since <br/>1999. Our mission is to keep you smiling with every bite.</p>
                <p>Treat yourself to a feel-good meal today!</p></div>
            </div>
            <div classname='about__footer' style={{ backgroundImage: `url(${background})`, height: "100vh",backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                
            </div>
        </div>
    )
}

export default About