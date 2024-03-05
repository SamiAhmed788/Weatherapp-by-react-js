import { Row } from "antd";
import { UpdateForcast } from "./updateforcast";

export  const Fotter=({hour})=>{

console.log(hour);

return(
<> 
<div>
   

<Row>

{
    hour && hour?.map((wethervalue, index)=><UpdateForcast wethervalue={wethervalue}  key={index} index={index}   />)
}

</Row>

</div>
</>
)


}