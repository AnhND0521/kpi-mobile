import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CalendarHorizontal from '../components/calendar/CalendarHorizontal'
import Warning from '../components/Warning'
import WeeklyFinishedTasksChart from '../components/charts/WeeklyFinishedTasksChart'
import { Card, Typography } from '@material-tailwind/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import TasksChart from '../components/charts/TasksChart'
import KPIList from '../components/KPIList'

const Dashboard = () => {
  return (
    <div className='w-full'>
      <Header currentPage='Trang chủ' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <Warning />
        <CalendarHorizontal
          weeksFromCurrentDate={1}
        />
        <div className='w-full flex items-center justify-between'>
          <Typography variant='h5' className='font-inter text-md font-bold'>
            Thống kê
          </Typography>
          <Typography variant='h6' className='flex font-inter text-md font-regular text-purple'>
            Chi tiết
            <ChevronRightIcon className='w-4' />
          </Typography>
        </div>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md'>
            Số công việc hoàn thành tuần qua
          </Typography>
          <WeeklyFinishedTasksChart />
        </Card>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md'>
            Số lượng công việc
          </Typography>
          <TasksChart />
        </Card>

        <div className='w-full flex items-center justify-between'>
          <Typography variant='h5' className='font-inter text-md font-bold'>
            KPI của bạn
          </Typography>
          <Typography variant='h6' className='flex font-inter text-md font-regular text-purple'>
            Chi tiết
            <ChevronRightIcon className='w-4' />
          </Typography>
        </div>
        <KPIList />
      </main>
      <Navbar />
    </div>
  )
}

export default Dashboard