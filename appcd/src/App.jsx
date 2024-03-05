import { useEffect, useState } from 'react'

import './App.css'
import cloudsimple from "./assets/clould.gif" 
import dizzle from "./assets/7sd5.gif"
import halfcloudmistry from "./assets/Lx0q.gif"
import rainning from "./assets/QAOA.gif"
import sunny from "./assets/sunny.gif"
import heavythunder from "./assets/OtZ (1).gif"
import lightrain from "./assets/IxI.gif"
import thunder3 from "./assets/N8i8.gif"
import overcast from "./assets/7RtV.gif"
import partly from "./assets/partlycloud.gif"

import { Header } from '../components/header/hea'
import { Content } from '../components/conntent/content'
import { Fotter } from '../components/fotter/fotte'
function App() {
  const [hour, sethour] = useState()
  const [whetherdata, setwetherdata] = useState()
  const [city, setcity] = useState("")

  useEffect(() => {
    const api_key = "f7543f73e5bd430b8e7193101240902";
    async function getWeather(getCityName) {
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${getCityName ? getCityName : "Karachi"}`
      )
        .then((res) => res.json())
        .then((response) => {
          console.log("data", response);

          const {
            current: {
              condition: { text },
              last_updated,
              cloud,
              feelslike_c,
              feelslike_f,
              humidity,
              wind_mph,
            },
            location: { name, country },
            forecast: {
              forecastday: {
                0: {
                  astro: { sunrise, sunset },
                  hour,
                },
              },
            },
          } = response;
          console.log(text, sunrise, sunset, hour, last_updated, feelslike_c);
          const settingHour = hour.slice(13, 23);
          console.log(settingHour);
          sethour([...settingHour]);
          setwetherdata({
            text,
            last_updated,
            feelslike_c,
            feelslike_f,
            humidity,
            wind_mph,
            name,
            country,
            sunrise,
            sunset,
            cloud
          });
        });
    }
    getWeather(city);
    console.log("cityName",city);
  }, [city]);

const wethercondition = whetherdata?.text;
console.log(wethercondition);

let bGimg;

  switch (wethercondition) {
    
    case "Rainy":
 bGimg = rainning
      break;
      case "Sunny":
    bGimg = sunny
        break;
        case "Patchy rain nearby":
    bGimg = dizzle
          break;
          case "Partly Cloudy":
   bGimg = halfcloudmistry
            break;
            case "Overcast":
    bGimg = overcast
              break; 
      case "Moderate or heavy rain in area with thunder":
       bGimg = thunder3
      break;
      case "Light rain shower":
        bGimg = lightrain
       break;
       case "Light rain":
        bGimg = lightrain
       break;
       case "Light drizzle":
        bGimg = dizzle
       break;
       case "Patchy light rain with thunder":
        bGimg = thunder3
       break;
        case "Moderate or heavy rain with thunder":
       bGimg = heavythunder
      break; 
      case "Clear":
      bGimg = halfcloudmistry
     break;
  
    default:
bGimg = halfcloudmistry
      break;
  }

  return (
<div className='wether' style={{backgroundImage:`url(${bGimg})`,backgroundRepeat:"no-repeat",backgroundPosition:"left",backgroundSize:"contain",paddingRight:"200px"}}>
<Header whetherdata={whetherdata} setcity={setcity}/>
<Content  whetherdata={whetherdata} />
<Fotter hour={hour}  />
</div>
  )
}

export default App
