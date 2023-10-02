import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import StaticNavigationBar from "./StaticNavigationBar";

//images
import hildibot from "../images/software/hildibot.png"
import movieseats from "../images/software/elokuva_paikkavaraus.png"
import coldfusion from "../images/software/coldfusion.png"
import citybikeapp from "../images/software/helsinkicitybikeapp.png"
import matinkyla1 from "../images/software/matinkylanseurahuone1.png"
import matinkyla2 from "../images/software/matinkylanseurahuone2.png"

let software = [
    {img: citybikeapp, title: "Helsinki City Bike App", desc: "SPA-application for browsing city bike journeys and stations.", tags: "Typescript, MariaDB, Node.js, Docker, React, Axios, ExpressJS, React Leaflet, OpenStreetMap", link: "https://github.com/iandersi/helsinki-citybike-app"},
    {img: hildibot, title: "Hildibot - Discord Bot", desc: "Discord bot to help manage FFXIV community server.",  tags: "Typescript, Node.js, Discord.js, MariaDB, Docker, NodeSchedule, Dotenv", link: "https://github.com/iandersi/bot-hildi"},
    {img: movieseats, title: "Movie Seat Reservation", desc: "Application that lets the user select screenings and reserve seats.", tags: "Javascript, HTML5, CSS", link: "https://inaandersin.wordpress.com/"},
    {img: coldfusion, title: "Steam API App", desc: "Application that gets gameplay data from the Steam API.", tags: "Coldfusion, HTML5, CSS", link: "https://github.com/iandersi/steam-app-coldfusion"}
]

let softwareShowcase = [
    {img1: matinkyla1, img2: matinkyla2, title: "Matinkylän Seurahuone", desc: "React application I created for a restaurant. Application uses firebase/firestore, staff can update the menus and the updates are visible in real-time on the website. Still under development.", tags: "Typescript, React, Google Firebase (Firestore)", link: "https://matinkylan-seurahuone.web.app/"}
]



export default function SoftwarePortfolioPage() {
    useDocumentTitle('Software');
    return (
        <div className="art-and-software-page-container">
            <div className="title-and-navigation">
                <h1>Artwork</h1>
                <StaticNavigationBar/>
            </div>
            <div className="content software">
                <div className="software-showcase">
                    <h4>{softwareShowcase[0].title}</h4>
                    <div>
                        <img src={softwareShowcase[0].img1}/>
                        <img src={softwareShowcase[0].img2}/>
                    </div>
                    <div>{softwareShowcase[0].desc}</div>
                    <div>{softwareShowcase[0].tags}</div>
                    <a href={softwareShowcase[0].link}>Demo</a>
                </div>
                <div className="software-short-showcase">
                    {software.map(software => {
                        return (
                            <div className="img-and-desc">
                                <h4>{software.title}</h4>
                                <img src={software.img}/>
                                <div>{software.desc}</div>
                                <div>{software.tags}</div>
                                <a href={software.link}>Source Code</a>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

//
// <div className="art-and-software-wrapper">
//     //     <div className="art-and-software-page-container">
//     //         <div className="title-and-navigation">
//     //             <h1>Software</h1>
//     //             <StaticNavigationBar/>
//     //         </div>
//     //         <div className="content software">
//     //             <Card>
//     //                 <Card.Img variant="top" src={citybikeapp}/>
//     //                 <Card.Body>
//     //                     <Card.Title><h3>City Bike App</h3></Card.Title>
//     //                     <div>Browse city bike journeys and stations</div>
//     //                     <div>Typescript, MariaDB, Node.js, Docker, React, Axios, ExpressJS, React Leaflet, OpenStreetMap</div>
//     //                 </Card.Body>
//     //                 <Card.Footer>
//     //                     <a className="btn btn-primary" href="https://github.com/iandersi/helsinki-citybike-app">Github</a>
//     //                 </Card.Footer>
//     //             </Card>
//     //             <Card >
//     //                 <Card.Img variant="top" src={coldfusion}/>
//     //                 <Card.Body>
//     //                     <Card.Title><h3>Steam App</h3></Card.Title>
//     //                     <div>Application that uses the Steam API</div>
//     //                     <div>Coldfusion, CSS</div>
//     //                 </Card.Body>
//     //                 <Card.Footer>
//     //                     <a className="btn btn-primary" href="https://github.com/iandersi/steam-app-coldfusion">Github</a>
//     //                 </Card.Footer>
//     //             </Card>
//     //             <Card >
//     //                 <Card.Img variant="top" src={hildibot}/>
//     //                 <Card.Body>
//     //                     <Card.Title><h3>Hildibot</h3></Card.Title>
//     //                     <div>Discord bot for private server</div>
//     //                     <div>Typescript, Node.js, Discord.js, MariaDB, Docker, NodeSchedule, Dotenv</div>
//     //                 </Card.Body>
//     //                 <Card.Footer>
//     //                     <a className="btn btn-primary" href="https://github.com/iandersi/bot-hildi">Github</a>
//     //                 </Card.Footer>
//     //             </Card>
//     //             <Card>
//     //                 <Card.Img variant="top" src={movieseats}/>
//     //                 <Card.Body>
//     //                     <Card.Title><h3>Movie Seat Reservation</h3></Card.Title>
//     //                     <div>App that lets the user select screenings and reserve seats</div>
//     //                     <div>Javascript, HTML5, CSS</div>
//     //                 </Card.Body>
//     //                 <Card.Footer>
//     //                     <a className="btn btn-primary" href="https://inaandersin.wordpress.com/category/seat-booking-js-project/">Wordpress</a>
//     //                 </Card.Footer>
//     //             </Card>
//     //             <Card >
//     //                 <Card.Img variant="top" src={tripletriad}/>
//     //                 <Card.Body>
//     //                     <Card.Title><h3>Triple Triad Clone</h3></Card.Title>
//     //                     <div>TT card game clone from FF8</div>
//     //                     <div>Typescript, React, Lodash, Bootstrap, HTML5, CSS</div>
//     //                 </Card.Body>
//     //                 <Card.Footer>
//     //                     <a className="btn btn-primary" href="https://github.com/iandersi/triple-triad-collection">Github</a>
//     //                 </Card.Footer>
//     //             </Card>
//     //         </div>
//     //     </div>
//     // </div>

