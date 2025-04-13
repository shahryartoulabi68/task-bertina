import React from 'react'
import { PiMinus, PiPlus } from 'react-icons/pi'

function FaqItem({ item, openIndex, toggleItem }) {
    return (
        <div key={item.id} className="w-full max-w-lg">
            <span
                onClick={() => toggleItem(item.id)}
                className="flex items-center z-20 gap-x-2 shadow-around px-4 py-4 text-lg
cursor-pointer 
rounded-2xl rounded-br-none  bg-violet-500 text-white"
            >
                {openIndex === item.id ? <PiMinus /> : <PiPlus />}
                <span >{item.question}</span>
            </span>
            {/* {openIndex === index && ( */}
            <div className={`${openIndex === item.id ?
                'max-h-64 opacity-100 p-4 overflow-hidden' : 'max-h-0 opacity-0 overflow-hidden'} bg-secondary-0 shadow-around  text-justify
              transition-all duration-500 rounded-2xl rounded-bl-none my-2`}>
                {item.answer}
            </div>
            {/* )} */}
        </div>
    )
}

export default FaqItem
