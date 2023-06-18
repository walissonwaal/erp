import React from 'react'
import { MdAutoGraph } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'

export default function index () {
  return (
    <nav className='h-full shadow-md text-erpGray text-2xl flex flex-col gap-4 pt-14 px-2'>
      <span className='flex justify-center items-center cursor-pointer hover:text-erpWhite duration-150 gap-1'>
        <MdAutoGraph />
      </span>
      <span className='flex justify-center items-center cursor-pointer hover:text-erpWhite duration-150 gap-1'>
        <FiSettings />
      </span>
    </nav>
  )
}
