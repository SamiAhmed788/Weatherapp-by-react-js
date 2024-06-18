import { useState } from "react";
import logo from "./R-removebg-preview.png"
import location from "./location-removebg-preview.png"
import { Input } from "antd";

export  const Header =({whetherdata,setCity})=>{

    const [currentDateVal, setCurrentDateVal] = useState()
    const currentDate = whetherdata?.last_updated.slice(0,whetherdata?.last_updated.indexOf(" "));
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    const date = new Date(currentDate)
    const day = days[date.getDay()]
    const month = months[date.getMonth()]
    const getCurrentDate = date.getDate()
    const todayDate = `${day} ${getCurrentDate} ${month}`
    console.log("Date",day, month, getCurrentDate);

return(
    <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center",color:"#00004d", gap:"10px"}}>
        <img  class="img-fluid" src={logo}  alt="logo" width="90px" />
        <h4>Weather App</h4>

        </div>
<div style={{display:"flex", justifyContent:"center",marginTop:"20px",height:"25px" }}>
<input style={{width:"200px",backgroundColor:"transparent",borderRadius:"10px" ,paddingLeft:"10px",color:"black",border:"2px solid black"}} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Search" />
</div>
<div className="data"  style={{display:"flex",alignItems:"center"}}>
    <img width={"30px"}  class="img-fluid"  src={location} alt="" />
<h3 style={{color:"white"}}>{whetherdata?.name},{whetherdata?.country}</h3>


</div>
<h5 style={{marginLeft:"50px",marginTop:"10px",color:"white"}}>{todayDate}</h5>
        </div>
)


}