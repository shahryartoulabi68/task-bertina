import React, { useState } from 'react'
import Table from '../Ui/Table'
import { renderToPipeableStream } from 'react-dom/server'

const products = [
    {
        id: 1,
        title: 'هاست اشتراکی',
        description: 'سرویس هاست اشتراکی لینوکسی و ویندوزی',
        price: "از ۵۸,۰۰۰ هراز تومان"
    },
    {
        id: 2,
        title: 'سرور مجازی',
        description: 'خرید سرور مجازی با پلن های متنوع ایران و المان و فرانسه',
        price: 'از ۲۹۹,۰۰۰ هزار تومان'
    },
    {
        id: 3,
        title: 'سرور اختصاصی',
        description: 'سرور اختصاصی ایران و آلمان با پلن های متنوع',
        price: " از ۲ میلیون تومان"
    },
    {
        id: 4,
        title: 'میزبانی سرور',
        description: 'میزبان سرور شما در دیتاسنتر اختصاصی برتینا',
        price: 'تماس با واحد فروش'
    },
]

function ComparePlans() {
    const [isShowTable, setIsShowTable] = useState(false)
    return (
        <div className='flex flex-col items-center justify-between mb-10'>
            <button
                onClick={() => setIsShowTable(!isShowTable)}
                className='btn bg-violet-500 px-4 py-2 text-secondary-0 mb-10'>{
                    isShowTable ? "بستن مقایسه محصولات" : "مقایسه محصولات"
                }</button>
            {isShowTable ?
                <Table>
                    <Table.Headr>
                        <th className='py-2 text-start text-gray-600'>محصول</th>
                        <th className='py-2 text-start text-gray-600'>توضیحات</th>
                        <th className='py-2 text-start text-gray-600'>شروع قیمت </th>
                        <th className='py-2 text-start text-gray-600'></th>
                    </Table.Headr>
                    <Table.body>
                        {products.map((product) => {
                            return <tr key={product.id} className='tdClass'>
                                <td className='text-violet-500 font-bold'>{product.title}</td>
                                <td className=''>{product.description}</td>
                                <td className=''>{product.price}</td>
                                <td className=''>
                                    <button className='px-4 py-2 my-2 rounded-lg text-violet-500 bg-secondary-0 border border-violet-500'>مشاهده</button>
                                </td>
                            </tr>
                        })}
                    </Table.body>
                </Table> : ""
            }
        </div>
    )
}

export default ComparePlans
