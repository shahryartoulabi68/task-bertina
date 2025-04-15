import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";

function Header() {
    return (
        <div>
            <div className='py-2 container flex items-center justify-between'>
                <div className='flex items-center gap-x-2' >
                    <span className='font-bold text-violet-400 text-sm bg-violet-200 px-2 py-1 rounded-md'>خبر ویژه</span>
                    <FaChevronLeft className='w-5 h-5 font-bold text-violet-500' />
                    <span className='text-sm text-violet-500'>پیش از دیگران سایت جدید برتینا را ببینید...</span>
                </div>
                <div className='flex items-center gap-x-4'>
                    <div className='flex items-center gap-x-1 text-violet-400'>
                        <LiaClipboardListSolid className='w-5 h-5 font-bold ' />
                        <span className=''>وبلاگ</span>
                    </div>
                    <div className='flex items-center gap-x-1 text-violet-400'>
                        <FaRegUser className='w-5 h-4 font-bold ' />
                        <span className=''>ورود/ثبت نام</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
