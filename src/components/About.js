import React from 'react'
import background from "../components/images/about_bg.png";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import "./about.css"
const About = () => {
    return (
        <div className='about__container'>
            <div className='about__header'>
                <div className='about__header__left'>All About TSB</div>
                <div className='about__header__right'><p>We have been serving irresistible comfort food since <br/>1999. Our mission is to keep you smiling with every bite.</p>
                <p>Treat yourself to a feel-good meal today!</p></div>
            </div>
            <div classname='about__content' style={{ backgroundImage: `url(${background})`, height: "100vh",backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className='about__content__name'>
                    <h1>THE TSB </h1>
                    <h6>──────────by─────────</h6>
                    <h4>Rishav</h4>
                </div>
                <div className='about__contents__click'>
                <li>
                    <ul><Button variant="text" target='blank'><Link to="/reserve">RESERVE</Link></Button></ul>
                    <ul><Button variant="text"><Link to="/reserve">MENUS</Link></Button></ul>
                    <ul><Button variant="text"><Link to="/reserve">EXPERIENCES</Link></Button></ul>
                    <ul><Button variant="text"><Link to="/reserve">GALLERY</Link></Button></ul>
                    <ul><Button variant="text"><Link to="/reserve">PRIVATE EVENTS</Link></Button></ul>
                </li>
                </div>
            </div>
        </div>
    )
}

export default About