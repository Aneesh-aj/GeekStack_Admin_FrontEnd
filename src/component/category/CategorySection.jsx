import { getAllCategory } from "../../utils/api";
import TableSection from "../table/TableSection"
import React, { useEffect, useState } from "react"


const CategorySection=()=>{
    const [data,setData]= useState([])

    const headings = [
        "No",
        "Category",
        "Icon",
        "Subcategory",
        "Created At",
        "deleted",
        "Action",
      ];

      useEffect(()=>{
         fetchData()
      },[])

      async function fetchData(){
         const res = await getAllCategory()
         setData(res.category)
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


export default CategorySection