import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import StaticNavigationBar from "./StaticNavigationBar";
import Footer from "./Footer";

//images
import winter from "../images/artwork/winter_cropped.jpg"
import rivorn from "../images/artwork/rivorn_cropped.png"
import eyesonme from "../images/artwork/eyesonme_cropped.jpg"
import venom from "../images/artwork/Venom_cropped.jpg"
import cutlery from "../images/artwork/asetelma_cropped.png"
import iomin from "../images/artwork/iomin_cropped.png"
import bedroom from "../images/artwork/BedRoom_cropped.png"
import clutter from "../images/artwork/clutter_cropped.png"
import joker from "../images/artwork/joker_cropped.jpg"
import ellie from "../images/artwork/ellie_cropped.jpg"


let art = [
    {title: "Eyes On Me (2022)"}
]

export default function ArtPortfolioPage() {
    useDocumentTitle('Art');
    return (
        <div className="art-and-software-wrapper">
            <div className="art-and-software-page-container">
                <div className="title-and-navigation">
                    <h1>Artwork</h1>
                    <StaticNavigationBar/>
                </div>
                <div className="content artwork">

                    <div className="portraits">
                        <h3>Portraits & Creatures</h3>
                        <div className="artwork-images">
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={iomin}/>
                                <div>Iómin (2023)</div>
                                <div>Wacom Cintiq / Krita</div>
                            </div>
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={eyesonme}/>
                                <div>Stage Light (2022)</div>
                                <div>Wacom Cintiq / Krita</div>
                            </div>
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={rivorn}/>
                                <div>Rivorn (2022)</div>
                                <div>Wacom Cintiq / Krita</div>
                            </div>
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={joker}/>
                                <div>The Joker (2020)</div>
                                <div>Huion P1060 / Krita </div>
                            </div>
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={venom}/>
                                <div>Venom (2019)</div>
                                <div>Watercolor pencils and promarkers</div>
                            </div>
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={ellie}/>
                                <div>Ellie - The Last of Us (2019)</div>
                                <div>Graphite pencils</div>
                            </div>
                        </div>
                    </div>

                    <div className="studies">
                        <h3>Studies</h3>
                        <div className="artwork-images">
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={winter}/>
                                <div>Master Study (2022)</div>
                                <div>Wacom Cintiq / Krita </div>
                            </div>
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={cutlery}/>
                                <div>Material Study (2022)</div>
                                <div>Wacom Cintiq / Krita</div>
                            </div>
                        </div>
                    </div>

                    <div className="blender">
                        <h3>Blender 3D</h3>
                        <div className="artwork-images">
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={bedroom}/>
                                <div>Cozy Bedroom (2023)</div>
                                <div>Blender 3.4</div>
                            </div>
                            <div className="artwork-images-and-description">
                                <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={clutter}/>
                                <div>Clutter (2023)</div>
                                <div>Blender 3.5</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

