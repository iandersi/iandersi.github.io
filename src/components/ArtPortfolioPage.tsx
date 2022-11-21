import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import {Carousel} from "react-bootstrap";
import StaticNavigationBar from "./StaticNavigationBar";
import Footer from "./Footer";


export default function ArtPortfolioPage() {
    useDocumentTitle('Art');
    return (
        <>
            <div className="art-and-software-page-container">
                <h1>Artwork</h1>
                <div className="content"><StaticNavigationBar/></div>
                <div className="content artwork">
                    <h2>Portraits</h2>
                    <div className="content-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block" src="/artwork/rivorn_cropped.png"/>
                                <Carousel.Caption>
                                    <h2>Rivorn (2022)</h2>
                                    <p>Original character - Krita 5.1.1 - Wacom Cintiq</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block" src="/artwork/eyesonme_cropped.jpg"/>
                                <Carousel.Caption>
                                    <h2>Eyes On Me (2022)</h2>
                                    <p>Portrait - Krita 5.1.1 - Wacom Cintiq</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <h2>Creatures</h2>
                    <div className="content-carousel">
                        <Carousel>
                        <Carousel.Item>
                            <img className="d-block" src="/artwork/Venom_cropped.jpg"/>
                            <Carousel.Caption>
                                <h2>Venom (2020)</h2>
                                <p>Creature portrait (Marvel Comics) - Krita 5.1.1 - Wacom Cintiq</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel></div>

                    <h2>Landscapes & Still Life</h2>
                    <div className="content-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block" src="/artwork/winter_cropped.jpg"/>
                                <Carousel.Caption>
                                    <h2>A Winter Night (2022)</h2>
                                    <p>Master study (Viktor Yushkevich) - Krita 5.1.1 - Wacom Cintiq</p>
                                </Carousel.Caption>
                            </Carousel.Item><Carousel.Item>
                            <img className="d-block" src="/artwork/asetelma_cropped.png"/>
                            <Carousel.Caption>
                                <h2>A Set Table (2022)</h2>
                                <p>Light and material study - Krita 5.1.1 - Wacom Cintiq</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

