import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Typewriter from "react-ts-typewriter";
import AnimatedNavigationBar from "./AnimatedNavigationBar";
import Footer from "./Footer";

export default function MainPage() {
    useDocumentTitle('Home');
    return (
        <div className="main-page-container">
            <div className="main-page-content">
                <h1><Typewriter text="Ina Andersin Portfolio" cursor={true} speed={100}/></h1>
                <AnimatedNavigationBar/>
                <div className="main-page-margin"/>
                <h3 style={{color: 'white'}}><Typewriter text="Contact me" cursor={false} speed={150}/></h3>
                <div className="contact-information">
                    <p><a href="https://github.com/iandersi?tab=repositories">Github</a></p>
                    <p><a href="https://inaandersin.wordpress.com/">Wordpress</a></p>
                    <p><a href="https://www.linkedin.com/in/ina-a-48956b177/">LinkedIn</a></p>
                    <p>Artstation</p>
                </div>
            </div>
            <div className="main-page-footer">
                <Footer/>
            </div>
        </div>
    )
}

