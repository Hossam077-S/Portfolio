import React from 'react'
import NavBar from './NavBar'
import Card from '../Cards/Card1'
import Card2 from '../Cards/Card2'
export default function Portfolio() {
    return (
    <>
    <NavBar />
    <div className="Portfolio-Container">
        <div className="row-port">
            <div className="card-columns ml-5" id="card-col-1">
                <div className="first-Card">
                    <Card />
                </div>
                <div className="second-Card">
                    <Card2 />
                </div>
                <div className="thierd-Card">
                    <Card />
                </div>
            </div>
            <div className="card-columns mt-4 ml-5" id="card-col-2">
                <div className="first-Card">
                    <Card />
                </div>
                <div className="second-Card">
                    <Card2 />
                </div>
                <div className="thierd-Card">
                    <Card />
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
