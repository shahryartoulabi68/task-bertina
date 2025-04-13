import React from 'react'
import logo from '../../public/images/55-55.webp'
import { BiChevronDown } from 'react-icons/bi'
import { CiChat1 } from "react-icons/ci";

import { BsTelephone } from "react-icons/bs";
import EnglishToPersianNumber from '../Utils/PersianNumber';

const liTitle = [
    {
        id: 1,
        title: "هاست"
    },
    {
        id: 2,
        title: "ثبت دامنه"
    },
    {
        id: 3,
        title: "گوگل ادز"
    },
    {
        id: 4,
        title: "سرور"
    },
    {
        id: 5,
        title: "ایمیل سازمانی"
    },
    {
        id: 6,
        title: "گواهی SSL"
    },
    {
        id: 7,
        title: "درباره ما"
    }
]


function Header() {
    return (
        <div>
            <div className='sticky z-20'>
                <nav className=' container  mx-auto flex items-center justify-between px-4'>
                    <div className='flex items-center gap-x-8'>
                        <img src={logo} alt='logo' />
                        <ul className='flex items-center gap-x-4 text-secondary-700'>
                            {
                                liTitle.map((item) => {
                                    return (
                                        <li
                                            key={item.id}
                                            className='group flex items-center gap-x-1 cursor-pointer'
                                        >
                                            {item.title}
                                            <BiChevronDown className='transform transition-transform duration-300 ease-in-out group-hover:rotate-180' />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span>
                            <CiChat1 className='w-5 h-5 text-orange-500' />
                        </span>

                        <span className='h-6 border-l-2 border-gray-200 mx-2' />

                        <span className='text-secondary-700'>
                            <EnglishToPersianNumber number="09167123676" />
                        </span>

                        <span>
                            <BsTelephone className='w-5 h-5 text-secondary-700' />
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
