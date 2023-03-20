import React from 'react'

const Index = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-green text-white font-bold text-sm py-1 hover:bg-[#00AC00c0] duration-150'
      type='submit'
    >
      {children}
    </button>
  )
}

export default Index
