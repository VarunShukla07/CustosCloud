"use client";
import { Shield, File, Upload } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';

function SideNav({ isOpen, toggleSidebar }) {
    const menulist = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: File,
            path: '/files'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },
    ];

    const [activeIndex, setActiveIndex] = useState();

    return (
        <div className={`shadow-sm border-r h-full fixed z-50 bg-white ${isOpen ? 'block' : 'hidden'} md:block`}>
            <div className='p-5 border-b'>
                <Image src='/logo.svg' width={80} height={80} className="block" alt="Logo" />
            </div>
            <div className='flex flex-col'>
                {menulist.map((item, index) => (
                    <button
                        key={item.id}
                        className={`flex items-center gap-8 p-10 px-6 hover:bg-gray-100 w-full text-gray-500 
                        ${activeIndex === index ? 'bg-blue-100 text-diffblue' : ''}`}
                        onClick={() => {
                            setActiveIndex(index);
                            toggleSidebar(); // Close the sidebar on selection in mobile view
                        }}
                    >
                        <item.icon className='md:block hidden' />
                        <h2>{item.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
