import React from 'react'

function ServiceItem({ item }) {
    return (
        <div  className='bg-secondary-0
                        space-y-4 rounded-xl flex flex-col p-8 items-center shadow-around '>
            {item.IconBase}
            <h2 className='font-bold text-xl'>{item.title}</h2>
            <p className='tracking-wide text-center'>{item.description}</p>
            <button className='btn bg-violet-500 px-4 py-2 text-secondary-0'>مشاهده پلن ها</button>
        </div>
    )
}

export default ServiceItem
