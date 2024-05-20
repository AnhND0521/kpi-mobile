import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
      <Header currentPage='Trang chủ' />
      <main></main>
      <Navbar />
    </div>
  )
}

export default Dashboard