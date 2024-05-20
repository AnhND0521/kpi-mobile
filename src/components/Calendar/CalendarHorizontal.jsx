import React, { act, useState } from 'react';
import {
  endOfWeek,
  startOfWeek
} from 'date-fns'
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import CalendarDay from './CalendarDay';
import { addOneDayToDate } from '../../utils/dateShit';
import Task from './Task';

const CalendarHorizontal = () => {
  const [weeksFromCurrentDate, setWeeksFromCurrentDate] = useState(0)
  const [activeDay, setActiveDay] = useState(new Date().getDay());
  const today = new Date();
  const start = new Date(startOfWeek(today).getTime() + 86400000 * 7 * weeksFromCurrentDate);
  let daysInWeek = []
  for (let i = 0; i < 7; i++) {
    const day = new Date(start.getTime() + 86400000 * i);
    daysInWeek.push(day);
  }
  const calendarDays = daysInWeek.map(day => 
    <CalendarDay 
      date={day.getDate()} 
      weekday={day.getDay()}
      active={day.getDay() == activeDay}
      setActiveDay={setActiveDay}
      hasTask={[1, 2, 4].includes(day.getDay())}
    />
  )

  return (
    <Card className='px-2 py-3 flex flex-col items-start bg-gray overflow-hidden rounded-md'>
      <Typography className='text-sm mb-2'>
        {addOneDayToDate(daysInWeek[activeDay]).toUTCString().substring(0,16)}
      </Typography>
      <CardBody className='p-0 w-full flex flex-col items-center'>
        <div className='w-full flex flex-row justify-between items-center gap-2'>
          <ChevronLeftIcon 
            className='cursor-pointer w-8' 
            onClick={() => {
              setWeeksFromCurrentDate(weeksFromCurrentDate - 1);
              setActiveDay(1);
            }}
          />
            <div className='grid grid-cols-7 w-full h-full'>
              {calendarDays}
            </div>
          <ChevronRightIcon 
            className='cursor-pointer w-8' 
            onClick={() => {
              setWeeksFromCurrentDate(weeksFromCurrentDate + 1);
              setActiveDay(1);
            }}
          />
        </div>
        <hr className='my-4 bg-black'/>
        <div className='w-full min-h-16 flex flex-col items-center gap-2 px-4'>
          <Task 
            name='IT4110'
            kpi='Giảng dạy'
            startTime='8:30'
            endTime='11:45'
          />
        </div>
      </CardBody>
    </Card>
  )
}

export default CalendarHorizontal