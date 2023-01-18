import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import StaticNavigationBar from "./StaticNavigationBar";
import Footer from "./Footer";
import {Button, Card} from "react-bootstrap";

//images
import hildibot from "../images/software/hildibot.png";
import movieseats from "../images/software/elokuva_paikkavaraus.png"
import tripletriad from "../images/software/TT.png"
import coldfusion from "../images/software/coldfusion.png"


export default function SoftwarePortfolioPage() {
    useDocumentTitle('Software');
    return (
        <div className="art-and-software-wrapper">
            <div className="art-and-software-page-container">
                <div className="title-and-navigation">
                    <h1>Software</h1>
                    <StaticNavigationBar/>
                </div>
                <div className="content software">
                    <Card >
                        <Card.Img variant="top" src={coldfusion}/>
                        <Card.Body>
                            <Card.Title><h3>Steam App</h3></Card.Title>
                            <div>Application that uses the Steam API</div>
                            <div>Coldfusion, CSS</div>
                        </Card.Body>
                        <Card.Footer>
                            <a className="btn btn-primary" href="https://github.com/iandersi/steam-app-coldfusion">Github</a>
                        </Card.Footer>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src={hildibot}/>
                        <Card.Body>
                            <Card.Title><h3>Hildibot</h3></Card.Title>
                            <div>Discord bot for private server</div>
                            <div>Typescript, Node.js, Discord.js, MariaDB, Docker, NodeSchedule, Dotenv</div>
                        </Card.Body>
                        <Card.Footer>
                            <a className="btn btn-primary" href="https://github.com/iandersi/bot-hildi">Github</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={movieseats}/>
                        <Card.Body>
                            <Card.Title><h3>Movie Seat Reservation</h3></Card.Title>
                            <div>App that lets the user select screenings and reserve seats</div>
                            <div>Javascript, HTML5, CSS</div>
                        </Card.Body>
                        <Card.Footer>
                            <a className="btn btn-primary" href="https://inaandersin.wordpress.com/category/seat-booking-js-project/">Wordpress</a>
                        </Card.Footer>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src={tripletriad}/>
                        <Card.Body>
                            <Card.Title><h3>Triple Triad Clone</h3></Card.Title>
                            <div>TT card game clone from FF8</div>
                            <div>Typescript, React, Lodash, Bootstrap, HTML5, CSS</div>
                        </Card.Body>
                        <Card.Footer>
                            <a className="btn btn-primary" href="https://github.com/iandersi/triple-triad-collection">Github</a>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


