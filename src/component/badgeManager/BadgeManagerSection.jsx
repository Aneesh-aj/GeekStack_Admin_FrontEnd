import React from "react";
import TableSection from "../table/TableSection";

const BadgeManagerSection=()=>{

    const headings = [
        "No",
        "Name",
        "Number",
        "Email",
        "Started Date",
        "Course",
        "working status",
        "Lead From",
        "Demo Class",
        "Lead score",
        "Status",
        "Action",
      ];
      
      const data = [
        {
            no: 1,
            date: '25 Jun 24',
            name: 'Vinith Babu',
            email: 'avinithbabu@gmail.com',
            number: '91 6380100120',
            course: 'Digital Marketing',
            employee: 'Haritha',
            amount: '₹ 1000',
            description: 'view',
            link: 'view',
            status: 'Created',
        },
        {
            no: 2,
            date: '09 Feb 24',
            name: 'vinith',
            email: 'vinith@geekstack.co.in',
            number: '91 9884740049',
            course: 'Digital Marketing',
            employee: 'Haritha',
            amount: '₹ 5000',
            description: 'view',
            link: 'view',
            status: 'Created',
        },
        {
            no: 3,
            date: '18 Jan 24',
            name: 'vinith babu',
            email: 'avinithbabu@gmail.com',
            number: '91 6380100120',
            course: 'Digital Marketing',
            employee: 'Haritha',
            amount: '₹ 5000',
            description: 'view',
            link: 'view',
            status: 'Created',
        },
        {
            no: 4,
            date: '18 Jan 24',
            name: 'vinith babu',
            email: 'vinith@geekstack.co.in',
            number: '91 9884740049',
            course: 'Digital Marketing',
            employee: 'Lisha',
            amount: '₹ 100',
            description: 'view',
            link: 'view',
            status: 'Created',
        },
    ];
    
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