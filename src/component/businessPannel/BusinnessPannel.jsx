import React, { useEffect, useState } from 'react';
import BussinessModal from '../modal/businessModal/BusinessModal';
import TableSection from '../table/TableSection';
import { getAllBusinessDetails } from '../../utils/api';

const BusinessPannel = () => {

    const [openModal, setOpenModal] = useState(false);
    const [data,setData]= useState([])
    
    useEffect(()=>{
          fetchData()
    },[])
    
    async function fetchData(){
        const res = await getAllBusinessDetails()
         console.log(" dd ",res.businesses)
        setData(res.businesses)
    }

    const toggleModal = () => {
        setOpenModal((prev) => !prev);
    };



    const headings = [
        "No",
        "Name",
        "Number",
        "Badge",
        "Category",
        "Created ",
        "Sub-category",
        "WhatsApp",
        "Other Details",
        "Action",
      ];
      const props = {
        headings,
        
        buttonValue: "Add new Lead",
        data,
       
      };

    return (
        <section className="w-full min-h-[600px] shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1)] rounded-lg">
            <div className="w-full flex justify-end p-3">
                <button className="bg-black rounded-md text-white p-2" onClick={toggleModal}>Add Business</button>
                <BussinessModal open={openModal} onClose={toggleModal} />
            </div>
              <TableSection data={props}/>
        </section>
    );
};

export default BusinessPannel;
