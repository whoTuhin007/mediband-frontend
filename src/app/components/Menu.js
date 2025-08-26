import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='md:w-1/4 w-full h-[20%] md:h-full bg-blue-200  p-4'>
    <ul className='space-y-1 md:space-y-4 w-full text-center font-semibold text-sm md:text-lg h-full flex flex-col md:justify-evenly '>
      <Link href={'/dashboard/medical-form'}>
      <li className='hover:bg-blue-300 p-2 rounded border '>My Medical Form</li>
      </Link>
        <Link href={'/dashboard/qr-card'}>
              <li className='hover:bg-blue-300 p-2 border rounded'>My Qr Code</li>


        </Link>
        <Link href={'/dashboard/orders'}>
        <li className='hover:bg-blue-300 p-2 border rounded'>My Orders</li>
        </Link>


   

    </ul>


    </div>
  )
}

export default Menu