import { persianNumber } from '../Utils/persianNumber'

const priceDomin = [
    {
        id: 1,
        title: ".net",
        price: 1824000,
    },
    {
        id: 2,
        title: ".com",
        price: 1220000,
    },
    {
        id: 3,
        title: ".info",
        price: 701000,
    },
    {
        id: 4,
        title: '.org',
        price: 1560000,
    },
]

function BertinaServices() {
    return (
        <div className='bg-primary-900 space-y-2 py-10'>
            <div className='flex gap-x-10 container p-8'>
                <div className='w-1/2 text-secondary-0 mt-8 space-y-8'>
                    <h1 className='text-4xl font-bold py-4 '>شما هم دعوتید...</h1>
                    <p className='text-lg text-justify tracking-wider'>
                        برتینا، ارائه‌دهنده انواع سرویس‌های هاستینگ، سرور ابری، تبلیغات گوگل، ثبت انواع دامنه و دیگر خدمات تحت شبکه و اینترنت با بهترین امکانات و رضایت بالای مشتریان است که با کمک نیروی انسانی متخصص و با تجربه، پاسخگوی نیاز شما در هر مرحله است و جای هیچ شک و تردیدی باقی نمی‌گذارد.

                    </p>
                    <button className='btn btn--primary whitespace-nowrap '>مشاهده خدمات</button>
                </div>
                <div>
                    <img src="/images/index-1.webp" alt="image" />
                </div>
            </div>
            <div className='flex flex-col items-center font-bold justify-center'>
                <h2 className='text-secondary-0 tracking-wider'>دامنه خود را در برتینا با اطمینان از مالکیت و پشتیبانی ثبت نمایید</h2>
            </div>
            <div className=' '>
                <div className='  flex items-center justify-center'>
                    <form className='flex w-full max-w-[400px] items-center justify-between bg-secondary-0 rounded-lg'>
                        <button className='btn btn--primary mr-1'>جستجو</button>
                        <input type="text"
                            placeholder='برای ثبت، دامنه با پسوند مورد نظر را وارد کنید'

                            className='py-3 flex-1 mx-1 placeholder:text-gray-300 placeholder:text-sm focus:outline-none' />
                        <span className=' text-lg ml-2'>.www</span>
                    </form>
                </div>

            </div>
            <div className='flex items-center justify-center'>
                <div className='flex items-center gap-x-4'>
                    {
                        priceDomin.map((item) => {
                            return <span key={item.id} className='flex items-center gap-x-1'>
                                <span className='text-secondary-0'>{persianNumber(item.price)}</span>
                                <span className='text-orange-300'>{item.title}</span>
                            </span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BertinaServices
