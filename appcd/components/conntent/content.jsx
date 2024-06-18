import cloud from "./asset/ODkn-unscreen.gif";
import suncloud from "./asset/myQ-unscreen.gif";
import umbrella from "./asset/umbrella.gif";
import sun from "./asset/sun.gif";
import { Col, Row } from "antd";
import WeatherInfo from "./wetherinfo";

export const Content = ({ whetherdata }) => {
    console.log(whetherdata, "==========>");
    const wethercondition = whetherdata?.text;
    let emoji;

    switch (wethercondition) {
        case "Rainy":
            emoji = umbrella;
            break;
        case "Sunny":
            emoji = sun;
            break;
        case "Patchy rain nearby":
        case "Partly Cloudy":
        case "Overcast":
        case "Clear":
            emoji = cloud;
            break;
        case "Moderate or heavy rain in area with thunder":
        case "Light rain shower":
        case "Light rain":
        case "Light drizzle":
        case "Patchy light rain with thunder":
        case "Moderate or heavy rain with thunder":
            emoji = umbrella;
            break;
        default:
            emoji = suncloud;
            break;
    }

    return (
        <div style={{ marginTop: "30px", marginLeft: "30px", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            <img src={emoji} alt="weather" style={{ width: "100%", maxWidth: "140px", marginRight: "20px" }} />
            <div>
                <p style={{ fontSize: "25px", margin: "5px", color: "white" }}>
                    {Math.floor(whetherdata?.feelslike_f)}
                    <sup style={{ fontSize: "25px" }}>°F | <span style={{ opacity: "0.7" }}>°C</span></sup>
                </p>
                <p style={{ fontSize: "15px", color: "white" }}>{whetherdata?.text}</p>
            </div>
  <WeatherInfo whetherdata={whetherdata}/>
        </div>
    );
};

