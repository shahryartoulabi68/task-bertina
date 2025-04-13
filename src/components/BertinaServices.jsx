import image from '../../public/images/index-1.webp'

function BertinaServices() {
    return (
        <div className='bg-primary-900'>
            <div className='flex gap-x-10 container p-8'>
                <div className='w-1/2 text-secondary-0 mt-8'>
                    <h1 className='text-4xl font-bold py-4 '>شما هم دعوتید...</h1>
                    <p className='text-lg'>
                        برتینا، ارائه‌دهنده انواع سرویس‌های هاستینگ، سرور ابری، تبلیغات گوگل، ثبت انواع دامنه و دیگر خدمات تحت شبکه و اینترنت با بهترین امکانات و رضایت بالای مشتریان است که با کمک نیروی انسانی متخصص و با تجربه، پاسخگوی نیاز شما در هر مرحله است و جای هیچ شک و تردیدی باقی نمی‌گذارد.

                    </p>
                    <button className='btn btn--primary'>مشاهده خدمات</button>
                </div>
                <div>
                    <img src={image} alt="image" />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default BertinaServices
