import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { UpdateForcast } from "./updateforcast";

export const Fotter = ({ hour }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1050);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!hour || hour.length === 0) {
        return <div>No forecast data available.</div>;
    }

    const displayedForecasts = isMobile ? hour.slice(0, 4) : hour;

    return (
        <div>
            <Row gutter={[16, 16]}>
                {displayedForecasts.map((wethervalue, index) => (
                    <UpdateForcast key={index} wethervalue={wethervalue} index={index} />
                ))}
            </Row>
        </div>
    );
};

export default Fotter;
