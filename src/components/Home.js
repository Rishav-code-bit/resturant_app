import React from 'react'
import background from "../components/images/home_bg.png";
import "./home.css";
const home = () => {
    return (
        <div classname="homebg" style={{ backgroundImage: `url(${background})`, height: "100vh",backgroundSize: "cover",backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
            <div className="homename">
                Home
            </div>
        </div>
    )
}

export default home;

