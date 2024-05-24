import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CalendarHorizontal from '../components/Calendar/CalendarHorizontal'

const Schedule = () => {
  return (
    <div className='w-full'>
      <Header currentPage='Lịch trình' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <CalendarHorizontal />
      </main>
      <Navbar active={1} />
    </div>
  )
}

export default Schedule