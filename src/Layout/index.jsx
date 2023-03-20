import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Index = ({ children }) => {
  return (
    <div className='h-screen'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Index
