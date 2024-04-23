import cloud from "./asset/ODkn-unscreen.gif"
import suncloud from "./asset/myQ-unscreen.gif"
import umbrella from "./asset/umbrella.gif"
import sun from "./asset/sun.gif"
import { Col, Row } from "antd"
export const Content = ({ whetherdata }) => {

    console.log(whetherdata, "==========>");
    const wethercondition = whetherdata?.text
    let emoji;

    switch (wethercondition) {

        case "Rainy":
            emoji = umbrella
            break;
        case "Sunny":
            emoji = sun
            break;
        case "Patchy rain nearby":
            emoji = cloud
            break;
        case "Partly Cloudy":
            emoji = cloud
            break;
        case "Overcast":
            emoji = cloud
            break;
        case "Moderate or heavy rain in area with thunder":
            emoji = umbrella
            break;
        case "Light rain shower":
            emoji = umbrella
            break;
        case "Light rain":
            emoji = umbrella
            break;
        case "Light drizzle":
            emoji = umbrella
            break;
        case "Patchy light rain with thunder":
            emoji = umbrella
            break;
        case "Moderate or heavy rain with thunder":
            emoji = umbrella
            break;
        case "Clear":
            emoji = cloud
            break;

        default:
            emoji = suncloud
            break;
    }



    return (
        <div style={{ marginTop: "30px", marginLeft: "30px",display:"flex" }}>
            <img src={emoji} alt="loj" width={"240px"} />
            <div >
            <p style={{fontSize:"55px", margin:"5px", color:"White"}}>{Math.floor(whetherdata?.feelslike_f)}<sup style={{fontSize:"25px"}}>°F | <span style={{opacity:"0.7"}}>°C</span> </sup></p>
            <p style={{fontSize:"28px",color:"white"}}>{whetherdata?.text}</p>
          </div>
          <Row >
 
      <Col lg={12} md={12} sm={24} xs={24} style={{border:"6px solid gold",paddingTop:"35px", width:"800px",marginLeft:"550px",backgroundColor:"#00001a", color:"white" , opacity:"0.8",borderRadius:"20px"}} >
        <div className="weather-info" style={{
    
    display: "flex",
    justifyContent: "space-around",
   
        }}>
          <div className="hight-info" style={{height:"160px"}} >
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{whetherdata?.humidity}°</p>
              <p style={{margin:"0"}}>Humidity</p>
            </div>
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{whetherdata?.feelslike_c}°</p>
              <p style={{margin:"0"}}>°C</p>
            </div>
          </div>
          <div>
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{whetherdata?.wind_mph}mph</p>
              <p style={{margin:"0"}}>Wind</p>
            </div>
            
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{whetherdata?.cloud < 10? "10%" : whetherdata?.cloud + "%"}</p>
              <p style={{margin:"0"}}>{whetherdata?.cloud < 40? "Sunny":"Rain"}</p>
            </div>
          </div>
          <div>
          <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{whetherdata?.sunrise}</p>
              <p style={{margin:"0"}}>Sunrise</p>
            </div>
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{whetherdata?.sunset}</p>
              <p style={{margin:"0"}}>Sunset</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>

         
        
        
        </div>
        
    )


}