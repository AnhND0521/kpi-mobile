import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CalendarHorizontal from '../components/Calendar/CalendarHorizontal'
import CalendarMonth from '../components/Calendar/CalendarMonth'

const Schedule = () => {
  return (
    <div className='w-full'>
      <Header currentPage='Lịch trình' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <CalendarMonth />
      </main>
      <Navbar active={1} />
    </div>
  )
}

export default Schedule