import React from 'react'
import Header from '../_lib/components/Header/Header'
import Footer from '../_lib/components/Footer/Footer'

function GeneralLayout({children}) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default GeneralLayout