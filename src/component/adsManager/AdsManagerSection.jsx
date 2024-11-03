import { getAllAdsDetails } from "../../utils/api";
import TableSection from "../table/TableSection";
import React, { useEffect, useState } from "react";

const AdsManagerSection=()=>{
    
    const [data,setData] = useState([])
    const headings = [
        "No",
        "AdName",
        "Business",
        "Created",
        "Limiit",
        "Budget",
        "Started Date",
        "End Date",
        "Status",
        "Banner",
        "Action",
      ];
      
      
      useEffect(()=>{
        fetchData()
      },[])

      async function fetchData(){
          const res = await getAllAdsDetails()
          console.log(" ddd d", res.ads)
          setData(res.ads)
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

export default AdsManagerSection