import { Typography } from '@material-tailwind/react'
import React from 'react'
import { getWeekdayShort } from '../../utils/dateShit'

const CalendarMonthDay = (props) => {
  const { day, active, setActiveDay, hasTask } = props
  const today = new Date();
  return (
    <div className='flex flex-col items-center' onClick={() => setActiveDay(day)}>
      <div className={`relative flex items-center justify-center h-9 w-9 ${active ? 'bg-purple' : 'bg-darkGray'} ${active && 'text-white'} rounded-full`}>
        {day.getDate()}
        {hasTask && <div className={`absolute bottom-1 w-1.5 h-1.5 rounded-full bg-${active ? 'white' : 'purple'}`}></div>} 
      </div>
    </div>
  )
}

export default CalendarMonthDay