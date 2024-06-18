import { Col } from "antd";
import React from "react";

export const UpdateForcast = ({ wethervalue, index }) => {
    const foreCastTime = wethervalue.time.slice(wethervalue.time.lastIndexOf(" ") + 1);
    const temp_c = wethervalue.temp_c;
    const weatherCondition = wethervalue.condition.text;

    let emoji;
    if (weatherCondition === 'Sunny') {
        emoji = '🌞'; // Sunny
    } else if (weatherCondition === 'Patchy rain nearby') {
        emoji = '🌧️'; // Rainy
    } else if (weatherCondition === 'Partly Cloudy' || weatherCondition === 'Cloudy') {
        emoji = '🌩️'; // Cloudy
    } else if (weatherCondition === 'Overcast') {
        emoji = '☁️'; // Overcast
    } else if (weatherCondition === "Light rain shower") {
        emoji = '🌦️'; // Light rain shower
    } else if (weatherCondition === "Light drizzle") {
        emoji = '☔'; // Light drizzle
    } else if (weatherCondition === "Torrential rain shower") {
        emoji = '⛈️'; // Torrential rain shower
    } else if (weatherCondition === "Moderate or heavy rain in area with thunder") {
        emoji = '🌩️'; // Moderate or heavy rain with thunder
    } else if (weatherCondition === "Fog") {
        emoji = '🌫️'; // Fog
    } else {
        emoji = '☁️'; // Default cloudy
    }

    return (
        <Col className="footer-col" lg={2} md={4} sm={5} xs={6} style={{ marginBottom: "50px", marginLeft: "20px", color: "black", borderRadius: "20px" }}>
            <h6>{foreCastTime < "12:00" ? foreCastTime + " AM" : foreCastTime + " PM"}</h6>
            <h5>{emoji}</h5>
            <h6>{temp_c} °</h6>
        </Col>
    );
};

export default UpdateForcast;
