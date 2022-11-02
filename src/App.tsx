import React from 'react';
import './css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import ArtPortfolioPage from "./components/ArtPortfolioPage";
import SoftwarePortfolioPage from "./components/SoftwarePortfolioPage";
import MainPage from "./components/MainPage";

function App() {

    return (
        <>
            <div className="page-content">
                        <BrowserRouter>
                            <Routes>
                                <Route element={<Layout/>}>
                                    <Route path='/' element={<MainPage key="main-page"/>}/>
                                    <Route path='/software'
                                           element={<SoftwarePortfolioPage key="software-portfolio-page"/>}/>
                                    <Route path='/art' element={<ArtPortfolioPage key="art-portfolio-page"/>}/>
                                </Route>
                            </Routes>
                        </BrowserRouter>
            </div>
        </>
    );
}

export default App;
