import React, { useState } from 'react';
import {
  startOfMonth,
  startOfWeek
} from 'date-fns'
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Task from './Task';
import { getTasksByDate } from '../../utils/dataUtils';
import CalendarMonthDay from './CalendarMonthDay';
import { getMonthName } from '../../utils/dateShit';

const CalendarMonth = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const start = new Date(startOfWeek(Date.parse(`${year},${month + 1},1`)).getTime());
  const [activeDay, setActiveDay] = useState(start);
  
  let daysInMonth = []
  for (let i = 0; i < 42; i++) {
    const day = new Date(start.getTime() + 86400000 * i);
    daysInMonth.push(day);
    if (day === today) {
      setActiveDay(day);
    }
  }

  const tasksActiveDay = getTasksByDate(activeDay);

  const calendarDays = daysInMonth.map(day => 
    <CalendarMonthDay 
      day={day}
      active={day.toDateString() === activeDay.toDateString()}
      setActiveDay={setActiveDay}
      hasTask={getTasksByDate(day).length > 0}
    />
  )

  const tasks = tasksActiveDay.map((task) => 
    <Task
      key={task.id}
      id={task.id}
      name={task.name}
      kpi={task.kpi}
      startTime={task.start}
      endTime={task.end}
    />
  )

  return (
    <Card className='px-4 pt-4 pb-8 flex flex-col items-start bg-gray overflow-hidden rounded-md'>
      <CardBody className='p-0 w-full flex flex-col items-center'>
        <div className='px-4 w-full flex flex-row justify-between items-center mb-4'>
          <ArrowLeftIcon 
            className='cursor-pointer w-8' 
            onClick={() => {
              if (month > 0) {
                setMonth(month - 1);
              }
              else {
                setMonth(11);
                setYear(year - 1);
              }
            }}
          />
          <Typography className='font-semibold'>
            Tháng {month+1}, {year}
          </Typography>
          <ArrowRightIcon 
            className='cursor-pointer w-8' 
            onClick={() => {
              if (month < 11) {
                setMonth(month + 1);
              }
              else {
                setMonth(0);
                setYear(year + 1);
              }
            }}
          />
        </div>
        <div className='px-4'>
          <div className='grid grid-cols-7 grid-rows-6 gap-3 w-full h-full'>
            {calendarDays}
          </div>
        </div>
        <hr className='my-2 bg-black'/>
        <div className='w-full min-h-16 flex flex-col items-center justify-center gap-2 px-4'>
          {tasks.length > 0 ? tasks : 
            <Typography variant='h6' className='font-inter font-regular text-textGray'>
              Không có lịch
            </Typography>
          }
        </div>
      </CardBody>
    </Card>
  )
}

export default CalendarMonth