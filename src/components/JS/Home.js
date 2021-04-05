import React from 'react'
import NavBar from './NavBar'
import Typed from 'react-typed'
import Particle from './Particles/ParticleHome';
export default function Home() {

    return (
    <>
    <NavBar />
    <Particle/>
    <div className="header-wraper">
        <div className="main-info">
            <h1>WEB DEVELOPMENT AND WEBSITES PROMOTIONS</h1>
            <Typed
            className="typed-text"
            strings={[ "Web Design", "Web Development", "React-Js", "Angular", "Bootstrap/CSS"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <button type="button" className="btn btn-outline-danger btn-lg btnContact">Contact us</button>
        </div>
    </div>
    </>
    );
}
