import React from 'react'
import Footer from '../components/Footer'
import Headers from '../components/Header'
import { Global } from '../styles/global'

function MainLayout({children}){
    return (
        <div>
            <Global/>
            <Headers />
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout