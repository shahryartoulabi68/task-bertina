
const service = [
    {
        id: 1,
        title: 'هاست وردپرس',
        description: 'بهینه شده برای وردپرس همراه با تمام ابزارهای مورد نیاز و پشتیبانی تخصصی متخصصین وردپرس',
        Special: ''
    },
    {
        id: 1,
        title: 'هاست وردپرس',
        description: 'بهینه شده برای ووکامرس و کلیه پلتفرمهای فروشگاهی. سخت افزار اختصاصی و پشتیبانی متخصصین ووکامرس',
        Special: 'ویژه فروشگاهها'
    }
]

function NewServices() {
    return (
        <div className='bg-violet-500 h-72 mb-8'>
            <div className=' h-full flex items-center container'>
                <img
                    src='/images/WooCom.webp'
                    alt="WooCom-Image"
                    className='object-contain max-h-full max-w-full'
                />
                <div>
                    <h1 className='font-bold text-3xl text-secondary-0 my-8 text-center'>سرویسهای جدید و تخصصی برتینا</h1>
                    <div className='flex items-center gap-x-4 '>
                        {service.map((item) => {
                            return <div key={item.id} className='rounded-xl text-secondary-0 space-y-2 p-6 mb-8 shadow-around shadow-primary-900'>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                                <p className='text-sm'>{item.description}</p>
                                <button className='btn bg-violet-600 px-4 py-2 rounded-none'>مشاهده پلن ها</button>
                            </div>
                        })

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewServices