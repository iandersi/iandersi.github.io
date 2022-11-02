import React from "react";
import {Link} from "react-router-dom";

export default function StaticNavigationBar() {
    return (
        <>
            <div className="page-selection-static">
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/art"><h3>Artwork</h3></Link>
                    <Link to="/software"><h3>Software</h3></Link>
            </div>
        </>
    )
}
