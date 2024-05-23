import React from 'react'
import TasksChart from '../components/charts/TasksChart'
import Header from '../components/Header'
import { Card, Typography } from '@material-tailwind/react'
import Navbar from '../components/Navbar'
import UpcomingTasksChart from '../components/charts/UpcomingTasksChart'
import OverallProgressChart from '../components/charts/OverallProgressChart'
import WeeklyFinishedTasksChart from '../components/charts/WeeklyFinishedTasksChart'

const Statistics = () => {
  return (
    <div className='w-full'>
      <Header currentPage='Thống kê' backDestination='/dashboard' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md'>
            Tổng quan tiến độ
          </Typography>
          <OverallProgressChart />
        </Card>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md'>
            Số lượng nhiệm vụ
          </Typography>
          <TasksChart
            finished={10}
            ongoing={15}
            overdue={20}
            total={45}
          />
        </Card>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md font-medium'>
            Số nhiệm vụ hoàn thành tuần qua
          </Typography>
          <WeeklyFinishedTasksChart />
        </Card>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md'>
            Lượng nhiệm vụ sắp tới
          </Typography>
          <UpcomingTasksChart
            upcomingTasksData={[1, 8, 7, 5, 8, 6, 3]}
          />
        </Card>
      </main>
      <Navbar />
    </div>
  )
}

export default Statistics