import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import StaticNavigationBar from "./StaticNavigationBar";
import Footer from "./Footer";

//images
import winter from "../images/artwork/winter_cropped.jpg"
import rivorn from "../images/artwork/rivorn_cropped.png"
import eyesonme from "../images/artwork/eyesonme_cropped.jpg"
import murdoch from "../images/artwork/Murdoch_pencil_cropped.jpg"
import venom from "../images/artwork/Venom_cropped.jpg"
import cutlery from "../images/artwork/asetelma_cropped.png"
import necromancer from "../images/artwork/oathbreaker_cropped.jpg"
import blossomsNightelf from "../images/artwork/blossomnightelf_cropped.jpg"

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
                    <div className="artwork-images">
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={eyesonme}/>
                            <div>Portrait (2022)</div>
                            <div>Wacom Cintiq</div>
                        </div>
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={rivorn}/>
                            <div>Rivorn (2022)</div>
                            <div>Wacom Cintiq</div>
                        </div>
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={necromancer}/>
                            <div>Necromancer (2020)</div>
                            <div>Huion P1060 </div>
                        </div>
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={blossomsNightelf}/>
                            <div>Blossom (2020)</div>
                            <div>Huion P1060 </div>
                        </div>
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={murdoch}/>
                            <div>Murdoch (2019)</div>
                            <div>White chalk on black paper</div>
                        </div>
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={venom}/>
                            <div>Venom (2019)</div>
                            <div>Watercolor pencils and promarkers </div>
                        </div>
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={winter}/>
                            <div>Master study (2022)</div>
                            <div>Wacom Cintiq</div>
                        </div>
                        <div className="artwork-images-and-description">
                            <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={cutlery}/>
                            <div>Material study (2022)</div>
                            <div>Wacom Cintiq</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

