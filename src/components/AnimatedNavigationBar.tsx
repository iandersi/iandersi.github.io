import React from "react";
import {Link} from "react-router-dom";
import Typewriter from "react-ts-typewriter";

export default function AnimatedNavigationBar() {
    return (
        <>
            <div className="page-selection-animated">
                    <Link to="/"><Typewriter text={'Home'} cursor={false} speed={200}/></Link>
                    <Link to="/art"><Typewriter text={'Artwork'} cursor={false} speed={200}/></Link>
                    <Link to="/software"><Typewriter text={'Software'} cursor={false} speed={200}/></Link>
            </div>
        </>
    )
}
