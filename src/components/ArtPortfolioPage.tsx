import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import StaticNavigationBar from "./StaticNavigationBar";

//images
import necromancer from "../images/artwork/necromancer_ara.png";
import iomin from "../images/artwork/iomin - rework_ara.png";
import thedarkurge from "../images/artwork/thedarkurge_ara.png";
import forest from "../images/artwork/ForestbyAra_Commission_Alex.png";
import light from "../images/artwork/light_ara.png";
import dawn from "../images/artwork/cabin.png";
import room from "../images/artwork/room.png";
import bedroom from "../images/artwork/bedroom.png"

let portraits = [
    {img: iomin, title: "Iómin (2023)"},
    {img: necromancer, title: "Iarwath (2023)"},
    {img: forest, title: "Forest (2023)"},
    {img: thedarkurge, title: "The Dark Urge (2023)"},
    {img: light, title: "Light (2021)"}

]

let blender = [
    {img: dawn, title: "Dawn (2023)"},
    {img: room, title: "Room (2023)"},
    {img: bedroom, title: "Fantasy Bedroom (2023)"}

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

