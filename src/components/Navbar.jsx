import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" width={14} height={18} className='cursor-pointer' />

            <div className='flex flex-1 justify-center max-sm:hidden '>
                {navLists.map((item, i)=>(
                    <div key={i} className='px-5 text-sm text-gray cursor-pointer hover:text-white transition-all'>
                        {item}
                    </div>
                ))}
            </div>
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="search" width={18} height={18} className='cursor-pointer' />
                <img src={bagImg} alt="bag" width={18} height={18} className='cursor-pointer' />
            </div>
        </nav>
    </header>
  )
}

export default navbar
