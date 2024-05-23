import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Warning from '../components/Warning'
import WeeklyFinishedTasksChart from '../components/charts/WeeklyFinishedTasksChart'
import { Card, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import { ArrowPathIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import KPIList from '../components/KPIList'
import { Link } from 'react-router-dom'
import CornerButton from '../components/CornerButton'
import { getCurrentKpis, loadData } from '../utils/dataUtils'
import OverallProgressChart from '../components/charts/OverallProgressChart'

const Dashboard = () => {
  const [kpis, setKpis] = useState(getCurrentKpis());

  const handleSync = () => {
    loadData();
    setKpis(getCurrentKpis());
  }

  return (
    <div className='w-full pb-16'>
      <Header currentPage='Trang chủ' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <Warning />
        <div className='w-full flex items-center justify-between'>
          <Typography variant='h5' className='font-inter text-lg font-semibold'>
            Thống kê
          </Typography>
          <Link to='/statistics'>
            <Typography variant='h6' className='flex font-inter text-md font-semibold text-purple'>
              Chi tiết
              <ChevronRightIcon className='w-4' />
            </Typography>
          </Link>
        </div>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md'>
            Tổng quan tiến độ
          </Typography>
          <OverallProgressChart />
        </Card>
        <div className='w-full flex items-center justify-between mt-3'>
          <Typography variant='h5' className='font-inter text-lg font-semibold'>
            KPI của bạn
          </Typography>
          {/* <Typography variant='h6' className='flex font-inter text-md font-regular text-purple'>
            Chi tiết
            <ChevronRightIcon className='w-4' />
          </Typography> */}
          <div className='flex items-center gap-2' onClick={handleSync}>
            <ArrowPathIcon className='w-6'/>
            <Typography className='text-sm font-normal font-regular font-inter'>Đồng bộ</Typography>
          </div>
        </div>
        <KPIList kpis={kpis} />
        <CornerButton icon='add' type='menu'/>
      </main>
      <Navbar />
    </div>
  )
}

export default Dashboard