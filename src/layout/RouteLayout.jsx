// import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/layout/Header'
import Footer from '../component/layout/Footer'
export default function RouteLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
