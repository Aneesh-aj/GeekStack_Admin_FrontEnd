import React, { useState } from 'react';
import BussinessModal from '../modal/BussinessModal';

const BusinessPannel = () => {

    const [openModal, setOpenModal] = useState(false);

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

    const toggleModal = () => {
        setOpenModal((prev) => !prev);
    };

    return (
        <section className="w-[90%] p-5 h-full">
            <div className="w-full flex justify-end mb-3">
                <button className="bg-black rounded-md text-white p-2" onClick={toggleModal}>Add Business</button>
                <BussinessModal open={openModal} onClose={toggleModal} />
            </div>
            <div>
                <div className=" w-full ">
                    <table className="table-auto w-full   rounded">
                        <thead>
                            <tr className="text-left text-gray-500 text-xs font-light tracking-wide font-montserrat">
                                <th className="px-2 py-2 ">NO</th>
                                <th className="px-6 py-2">DATE</th>
                                <th className="px-8 py-2">NAME</th>
                                <th className="px-12 py-2">EMAIL</th>
                                <th className="px-6 py-2">NUMBER</th>
                                <th className="px-8 py-2">COURSE</th>
                                <th className="px-4 py-2">GENERATED EMPLOYEE</th>
                                <th className="px-4 py-2">AMOUNT</th>
                                <th className="px-2 py-2">DESCRIPTION</th>
                                <th className="px-4 py-2">LINK</th>
                                <th className="">STATUS</th>
                                <th className="px-2 py-2 ">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className="border-t hover:bg-gray-50 text-xs text-gray-500 tracking-wide font-montserrat">
                                    <td className="px-4 py-2">{row.no}</td>
                                    <td className="px-4 py-2">{row.date}</td>
                                    <td className="px-4 py-2">{row.name}</td>
                                    <td className="px-4 py-2">{row.email}</td>
                                    <td className="px-4 py-2">{row.number}</td>
                                    <td className="px-4 py-2">{row.course}</td>
                                    <td className="px-4 py-2">{row.employee}</td>
                                    <td className="px-4 py-2">{row.amount}</td>
                                    <td className="px-4 py-2">
                                        <button className="text-black bg-gray-400 p-1 rounded-md">{row.description}</button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button className="text-black bg-gray-400 p-1 rounded-md">{row.link}</button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button className="text-orange-400 bg-sky-50 p-1 rounded-md">{row.status}</button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button className="text-green-500 mr-2">✏️</button>
                                        <button className="text-red-500">🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default BusinessPannel;
