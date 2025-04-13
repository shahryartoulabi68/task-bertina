import React from 'react'
import { MdLockOutline } from "react-icons/md";
import { GrHost } from "react-icons/gr";

const sections = [
    {
        id: 1,
        IconBase: <GrHost className='w-12 h-12 text-violet-400' />,
        title: 'هاست اشتراکی',
        description: 'هاستینگ برتینا با پشتیبانی ۲۴ ساعته واقعی، بهترین انتخاب برای میزبانی وبسایت شما'
    },
    {
        id: 2,
        IconBase: <MdLockOutline className='w-12 h-12 text-violet-400' />,
        title: 'سرور مجازی',
        description: 'سرورهای مجازی برتینا واقع در بهترین دیتاسنترهای ایران و جهان به همراه بهترین سخت‌افزارها'
    },
    {
        id: 3,
        IconBase: <GrHost className='w-12 h-12 text-violet-400' />,
        title: 'میزبانی ایمیل',
        description: 'امکان ساخت ایمیل قدرتمند مطابق با نام دامنه‌ی اختصاصی خود با خدمات میزبانی ایمیل برتینا'
    },
    {
        id: 4,
        IconBase: <GrHost className='w-12 h-12 text-violet-400' />,
        title: 'تبلیغ در گوگل',
        description: 'برتینا از بزرگترین شرکت‌های تبلیغات اینترنتی ایران و تنها نماینده (PremierPartner) رسمی گوگل در کشور'
    },
    {
        id: 5,
        IconBase: <GrHost className='w-12 h-12 text-violet-400' />,
        title: 'سرور اختصاصی',
        description: 'دیتاسنتر شرکت برتینا، محیطی امن برای نگهداری از سرورهای اختصاصی و ارائه‌دهنده سرویس‌ها با سرعت بالا'
    },
    {
        id: 6,
        IconBase: <GrHost className='w-12 h-12 text-violet-400' />,
        title: 'گواهی SSL',
        description: 'امن کردن سایت با استفاده از گواهینامه‌های امنیتی SSL برتینا و افزایش رتبه سایت خود در گوگل'
    },
]

function ServiceList() {
    return (
        <div>
            <div className='container'>
                <h1 className='font-bold text-3xl  mt-8  text-center'>خدمات هاست، دامنه و سرور برتینا</h1>
                <h2 className='text-center tracking-wide my-6 text-gray-600'>انواع خدمات مرتبط با راه‌اندازی کسب‌وکار اینترنتی و پیش‌نیازهای طراحی سایت</h2>
                <div className='grid grid-cols-3 gap-10'>
                    {sections.map((item) => {
                        return <div key={item.id} className='bg-secondary-0
                        space-y-4 rounded-xl flex flex-col p-8 items-center shadow-around '>
                            {item.IconBase}
                            <h2 className='font-bold text-xl'>{item.title}</h2>
                            <p className='tracking-wide text-center'>{item.description}</p>
                            <button className='btn bg-violet-500 px-4 py-2 text-secondary-0'>مشاهده پلن ها</button>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default ServiceList
