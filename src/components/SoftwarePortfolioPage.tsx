import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import AnimatedNavigationBar from "./AnimatedNavigationBar";
import {Carousel} from "react-bootstrap";
import StaticNavigationBar from "./StaticNavigationBar";
import Footer from "./Footer";


export default function SoftwarePortfolioPage() {
    useDocumentTitle('Software');
    return (
        <>
            <div className="art-and-software-page-container">
                <h1>Software</h1>
                <div className="content"><StaticNavigationBar/></div>
                <div className="content content-carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block" src="/software/hildibot.png"/>
                            <Carousel.Caption>
                                <div className="software-slideshow-text-white">
                                    <h2><a href="https://github.com/iandersi/bot-hildi">Hildibot (FFXIV Discord Bot)</a></h2>
                                    <p>Discord bot made for small private server - Typescript Discord.js MariaDB NodeSchedule Dotenv</p>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src="/software/elokuva_paikkavaraus.png"/>
                            <Carousel.Caption>
                                <div className="software-slideshow-text-white">
                                    <h2><a href="https://inaandersin.wordpress.com/category/seat-booking-js-project/">Movie Seat Reservation</a></h2>
                                    <p>App that lets the user select and reserve seats - Javascript HTML5 CSS</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src="/software/TT.png"/>
                            <Carousel.Caption>
                                <div className="software-slideshow-text-white">
                                    <h2><a href="https://github.com/iandersi/triple-triad-collection">Triple Triad Card Game</a></h2>
                                     <p>TT card game clone from FF8 - Typescript React Lodash Bootstrap HTML5 CSS</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <Footer/>
        </>
    )
}

