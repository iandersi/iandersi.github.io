import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import StaticNavigationBar from "./StaticNavigationBar";
import Footer from "./Footer";

//images
import necromancer from "../images/artwork/necromancer.png";
import iomin from "../images/artwork/iomin.png";
import rivorn from "../images/artwork/rivorn.png";
import stagelight from "../images/artwork/stagelight.jpg";
import hayfield from "../images/artwork/amata.png";
import joker from "../images/artwork/joker_2020.jpg";
import dawn from "../images/artwork/cabin.png";
import room from "../images/artwork/room.png";


let portraits = [
    {img: necromancer, title: "Iarwath (2023)"},
    {img: iomin, title: "Iómin (2023)"},
    {img: hayfield, title: "Hayfield (2023)"},
    {img: rivorn, title: "Rivorn (2022 )"},
    {img: stagelight, title: "Stagelight (2021)"},
    {img: joker, title: "The Joker (2020)"}
]

let blender = [
    {img: dawn, title: "Dawn (2023)"},
    {img: room, title: "Room (2023)"}
]

export default function ArtPortfolioPage() {
    useDocumentTitle('Art');
    return (
        <div className="art-and-software-page-container">
            <div className="title-and-navigation">
                <h1>Artwork</h1>
                <StaticNavigationBar/>
            </div>
            <div className="content artwork">
                {portraits.map(art => {
                    return (
                        <div className="img-and-desc">
                            <h4>{art.title}</h4>
                            <img src={art.img}/>
                        </div>
                    )
                })}
            </div>
            <div className="content artwork">
                {blender.map(blender => {
                    return (
                        <div className="img-and-desc">
                            <h4>{blender.title}</h4>
                            <img src={blender.img}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

