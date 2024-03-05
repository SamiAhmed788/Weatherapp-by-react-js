import { useState } from "react";
import logo from "./R-removebg-preview.png"
import location from "./location-removebg-preview.png"

export  const Header =({whetherdata,setcity})=>{

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
        <img src={logo} alt="logo" width="90px" />
        <h1>Wether App</h1>

        </div>
<div style={{display:"flex", justifyContent:"center",marginTop:"60px",height:"45px" }}>
<input style={{width:"300px",backgroundColor:"transparent",borderRadius:"10px" ,paddingLeft:"10px",color:"black",border:"6px solid black"}} onChange={(e)=>setcity(e.target.value)} type="text" placeholder="Search" />

</div>
<div style={{display:"flex", marginTop:"50px"}}>
    <img width={"50px"} src={location} alt="" />
<h1 style={{color:"white"}}>{whetherdata?.name},{whetherdata?.country}</h1>


</div>
<h3 style={{marginLeft:"50px",marginTop:"10px",color:"white"}}>{todayDate}</h3>
        </div>
)


}