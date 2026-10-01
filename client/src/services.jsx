import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Services() {
    const [contactMe, setContactMe] = useState(false);

    const handleContactMe = () => {
        setContactMe(true);
    }
    if (contactMe) {
        return <Navigate to="/contact" replace />;
    }
    return (
        <div>
            <h1>Services</h1>
            <p>I offer a range of services to help you achieve your goals.</p>

            <div className="servicesContainer">
                <div className="service">
                    <h4>General Programming</h4>
                    <img src="./src/assets/programming_img.avif"></img>
                </div>

                <div className="service">
                    <h4>Web Development</h4>
                    <img src="./src/assets/web_dev_image.jpg"></img>
                </div>

                <div className="service">
                    <h4>Databases</h4>
                    <img src="./src/assets/database_service.webp"></img>
                </div>

                <div className="service">
                    <h4>Software Development</h4>
                    <img src="./src/assets/software_dev.jpg"></img>
                </div>

                <div className="service">
                    <h4>Game Development</h4>
                    <img src="./src/assets/game_image.png"></img>
                </div>

                <div className="service" onClick={handleContactMe}>
                    <h4>Click this box to contact me!</h4>
                    <img src="./src/assets/contact_image.jpg"></img>
                </div>
            </div>
        </div>
    );
}