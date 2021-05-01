import React from 'react'
import Footer from '../components/Footer'
import Headers from '../components/Header'
import { Global } from '../styles/global'

function MainLayout({children, ...props}){
    return (
        <div>
            <Global/>
            <Headers {...props} />
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout