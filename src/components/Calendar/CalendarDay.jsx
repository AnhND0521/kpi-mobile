import { Typography } from '@material-tailwind/react'
import React from 'react'
import getWeekdayShort from '../../utils/getWeekdayShort'

const CalendarDay = (props) => {
  const { date, weekday, active } = props
  return (
    <div className='flex flex-col items-center'>
      <Typography className='text-sm'>
        {getWeekdayShort(weekday)}
      </Typography>
      <div className={`flex items-center justify-center h-9 w-9 bg-${active ? 'purple' : 'darkGray'} ${active && 'text-white'} rounded-full`}>
        {date}
      </div>
    </div>
  )
}

export default CalendarDay