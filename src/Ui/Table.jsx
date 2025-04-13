
function Table({ children }) {
    return (
        <div className='w-full overflow-x-auto shadow-around bg-secondary-0 px-4
        rounded-xl border border-secondary-200 whitespace-nowrap'>
            <table className="  w-full overflow-hidden">
                {children}
            </table>
        </div>
    )
}

export default Table


function TableHeader({ children }) {
    return <thead className="  overflow-hidden">
        <tr className="px-4 border-b-2">
            {children}
        </tr>
    </thead>
}

function TableBody({ children }) {
    return <tbody className="">
        {children}
    </tbody>
}

function TableRow({ children }) {
    return <tr className="bg-secondary-0 border border-b">{children}</tr>
}

Table.Headr = TableHeader
Table.body = TableBody
Table.Row = TableRow