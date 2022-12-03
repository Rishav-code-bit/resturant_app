import React from 'react'
import background from "../components/images/home_bg.png";
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import "./home.css";
const home = () => {
    return (
        <div classname="homebg" style={{ backgroundImage: `url(${background})`, height: "100vh",backgroundSize: "cover",backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
            <div className='home-name'>
              <h1>THE <br/> SUNDAY BITE</h1>
            </div>
            <div className='home-name-two'>
              <h2>Delicious food for everybody</h2>
              <Button variant="outlined"><Link to="/about">See More</Link></Button>
            </div>
        </div>
    )
}

export default home;

