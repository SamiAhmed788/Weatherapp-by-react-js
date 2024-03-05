import { Col } from "antd";

export  const UpdateForcast=({wethervalue , index})=>{
console.log(wethervalue,"==========>");
console.log(index,"==========>");
    const foreCastTime = wethervalue.time.slice(wethervalue.time.lastIndexOf(" ") + 1)
    const temp_c = wethervalue.temp_c;
    const cloudInfo = wethervalue.cloud
    console.log("ddd",cloudInfo);
    const weatherCondition = wethervalue.condition.text;
    console.log(weatherCondition);
    let emoji;
    if (weatherCondition === 'Sunny') {
        emoji = '🌞'; // Sunny
      } else if (weatherCondition === 'Patchy rain nearby') {
        emoji = '🌧️'; // Rainy
      } else if (weatherCondition === 'Partly Cloudy' || 'Cloudy') {
        emoji = '🌩️'; // Cloudy
      } else if (weatherCondition === 'Overcast') {
        emoji = '☁️'; // Snowy
      }else if(weatherCondition === "Light rain shower"){
        emoji = '🌦️ ' // light rain //Light drizzle
      }else if(weatherCondition === "Light drizzle"){
        emoji = '☔ ' // light rain //
      }else if(weatherCondition === "Torrential rain shower"){
        emoji = '⛈️ ' // light rain 
      }else if(weatherCondition === "Moderate or heavy rain in area with thunder"){
        emoji = '🌩️ ' // light rain //
      }else if(weatherCondition === "Fog"){
        emoji = '🌫️ ' // light rain //🌩️
      }else {
        emoji = '☁️'; // Snowy
      }

return(
<> 
<Col className="footer-col" lg={2} md={4} sm={5} xs={6} style={{marginTop:"220px",marginRight:"20px", color:"black" ,borderRadius:"20px"}} >
                <h4 >{foreCastTime < "12:00"? foreCastTime + " AM":foreCastTime + "PM"}</h4>
                <h1>{emoji}</h1>
                <h4>{temp_c} °</h4>
            </Col>
            
</>
)


}