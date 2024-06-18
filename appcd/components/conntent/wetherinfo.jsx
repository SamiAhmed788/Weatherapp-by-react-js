import React from 'react';
import { Row, Col } from 'antd';

const colStyle = {
    border: "2px solid gold",
    paddingTop: "35px",
    width: "100%",
    backgroundColor: "#00001a",
    color: "white",
    opacity: "0.8",
    borderRadius: "20px",
    marginBottom: "20px",
};

const weatherInfoStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
};

const infoBlockStyle = {
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%"
};

const textCenter = {
    fontSize:"10px",
    textAlign: "center"
};

const infoTitle = {
    fontSize: "20px",
    marginBottom: "5px",
    fontWeight: "600"
};

const infoText = {
    margin: "0"
};

const WeatherInfo = ({ whetherdata }) => {
    return (
        <Row justify="end" style={{ position: 'absolute', bottom: 150, right: 40 }}>
            <Col lg={{ span: 80, offset: 27 }} md={24} sm={24} xs={24} style={colStyle}>
                <div className="weather-info" style={weatherInfoStyle}>
                    <div style={infoBlockStyle}>
                        <div style={textCenter}>
                            <p style={infoTitle}>{whetherdata?.humidity}°</p>
                            <p style={infoText}>Humidity</p>
                        </div>
                        <div style={textCenter}>
                            <p style={infoTitle}>{whetherdata?.feelslike_c}°</p>
                            <p style={infoText}>°C</p>
                        </div>
                    </div>
                    <div style={infoBlockStyle}>
                        <div style={textCenter}>
                            <p style={infoTitle}>{whetherdata?.wind_mph}mph</p>
                            <p style={infoText}>Wind</p>
                        </div>
                        <div style={textCenter}>
                            <p style={infoTitle}>{whetherdata?.cloud < 10 ? "10%" : whetherdata?.cloud + "%"}</p>
                            <p style={infoText}>{whetherdata?.cloud < 40 ? "Sunny" : "Rain"}</p>
                        </div>
                    </div>
                    <div style={infoBlockStyle}>
                        <div style={textCenter}>
                            <p style={infoTitle}>{whetherdata?.sunrise}</p>
                            <p style={infoText}>Sunrise</p>
                        </div>
                        <div style={textCenter}>
                            <p style={infoTitle}>{whetherdata?.sunset}</p>
                            <p style={infoText}>Sunset</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default WeatherInfo;
