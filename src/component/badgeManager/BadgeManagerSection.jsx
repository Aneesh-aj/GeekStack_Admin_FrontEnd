import React, { useEffect, useState } from "react";
import TableSection from "../table/TableSection";
import { getAllBadges } from "../../utils/api";

const BadgeManagerSection=()=>{
    const [data,setData] = useState([])
    const headings = [
        "No",
        "Name",
        "Icon",
        "Started Date",
        "End Date",
        "Action",
      ];
      
      useEffect(()=>{
          fetchData()
      },[])

      async function fetchData(){
         const res = await getAllBadges()
         setData(res.badge)
      }
    
    const props = {
      headings,
      
      buttonValue: "Add new Lead",
      data,
     
    };
    
    return(
        <div>
           <TableSection  data={props}/>
        </div>
    )
}

export default BadgeManagerSection