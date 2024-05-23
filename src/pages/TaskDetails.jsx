import { IconButton, Rating, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { ArrowRightIcon, ArrowUturnLeftIcon, BellIcon, CalendarIcon, ClockIcon, FlagIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CornerButton from '../components/CornerButton';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const TaskDetails = () => {
  const location = useLocation();
  const { name, due, finished, total, taskName, start, end, taskDue, check } = location.state;
  const [rated, setRated] = useState(0);

  return (
    <div className='w-full'>
      <Header currentPage='Chi tiết công việc' backDestination='/kpi/1' state={location.state}/>
      <main className='flex flex-col items-start gap-4 my-16 p-4 overflow-y-scroll'>
        <div className='w-full flex justify-between items-center'>
          <Typography variant='h4' className='font-inter font-regular'>
            {taskName}
          </Typography>
          <div>
            <Link to='/kpi/1/edit' state={location.state}>
              <IconButton variant='outlined' className='border-purple w-8 h-8'>
                <PencilIcon className='w-6 text-purple'/>
              </IconButton>
            </Link>
            <IconButton variant='outlined' className='border-purple w-8 h-8 ml-2'>
              <TrashIcon className='w-6 text-purple'/>
            </IconButton>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <Typography className='font-inter font-regular text-purple'>
            Trong
          </Typography>
          <Typography className='font-inter font-semibold text-purple'>
            {name}
          </Typography>
          <ArrowRightIcon className='w-4 text-purple' />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='w-6' />
            <Typography className='font-inter font-regular'>
              {taskDue}
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <ClockIcon className='w-6' />
            <Typography className='font-inter font-regular'>
              {start} - {end}
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <FlagIcon className='w-6' />
            <Typography className='font-inter font-regular'>
              Ưu tiên trung bình
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <ArrowUturnLeftIcon className='w-6' />
            <Typography className='font-inter font-regular'>
              Không lặp lại
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <BellIcon className='w-6' />
            <Typography className='font-inter font-regular'>
              Thông báo trước 1 ngày
            </Typography>
          </div>
        </div>
        <Typography variant='h5' className='font-inter'>
          Đánh giá
        </Typography>
        <Typography variant='h6' className='font-inter'>
          Thời gian
        </Typography>
        <div className='grid grid-cols-2 grid-rows-2 gap-y-2 justify-items-start'>
          <Typography className='font-inter text-sm'>
            Thời hạn:
          </Typography>
          <Typography className='font-inter text-sm'>
            {taskDue} {end}
          </Typography>
          <Typography className='font-inter text-sm'>
            Hoàn thành:
          </Typography>
          <Typography className='font-inter text-sm'>
            {taskDue} {end}
          </Typography>
        </div>
        <div className='flex items-center gap-2'>
          <CheckBadgeIcon className='w-4 text-green' />
          <Typography className='font-inter text-sm'>
            Bạn hoàn thành sớm trước hạn 25 phút
          </Typography>
        </div>
        <Typography variant='h6' className='font-inter'>
          Chất lượng
        </Typography>
        <div className="flex items-center gap-2 font-bold">
          <Rating unratedColor="amber" ratedColor="amber" value={rated} onChange={(value) => setRated(value)} />
          {rated}/5
        </div>
      </main>
      <Link to='/kpi/1' state={location.state}>
        <CornerButton icon='finish' />
      </Link>
      <Navbar />
    </div>
  )
}

export default TaskDetails