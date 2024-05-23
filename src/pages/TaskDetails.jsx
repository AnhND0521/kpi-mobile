import { IconButton, Rating, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { ArrowRightIcon, ArrowUturnLeftIcon, BellIcon, CalendarIcon, ClockIcon, FlagIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CornerButton from '../components/CornerButton';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { findKpiById, findTaskById } from '../utils/dataUtils';
import moment from 'moment/moment';

const TaskDetails = () => {
  const { id, taskid } = useParams();
  const kpi = findKpiById(id);
  const task = findTaskById(id, taskid);
  const [rated, setRated] = useState(0);

  return (
    <div className='w-full'>
      <Header currentPage='Chi tiết công việc' backDestination={`/kpi/${id}`}/>
      <main className='flex flex-col items-start gap-4 my-16 p-4 overflow-y-scroll'>
        <div className='w-full flex justify-between items-center'>
          <Typography variant='h4' className='font-inter font-regular'>
            {task.name}
          </Typography>
          <div>
            <Link to={`/kpi/${id}/task/${taskid}/edit`}>
              <IconButton variant='outlined' className='border-purple w-8 h-8'>
                <PencilIcon className='w-6 text-purple'/>
              </IconButton>
            </Link>
            <IconButton variant='outlined' className='border-purple w-8 h-8 ml-2'>
              <TrashIcon className='w-6 text-purple'/>
            </IconButton>
          </div>
        </div>
        <Link to={`/kpi/${id}`} className='flex items-center gap-1'>
          <Typography className='font-inter font-regular text-purple'>
            Trong
          </Typography>
          <Typography className='font-inter font-semibold text-purple'>
            {kpi.name}
          </Typography>
          <ArrowRightIcon className='w-4 text-purple' />
        </Link>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='w-6' />
            <Typography className='font-inter font-regular'>
              {moment(task.date).format('DD/MM/YYYY')}
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <ClockIcon className='w-6' />
            <Typography className='font-inter font-regular'>
              {task.start} - {task.end}
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
        {task.status === 1 && 
        <>
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
              {moment(task.date).format('DD/MM/YYYY')} {task.end}
            </Typography>
            <Typography className='font-inter text-sm'>
              Hoàn thành:
            </Typography>
            <Typography className='font-inter text-sm'>
              {moment(task.date).format('DD/MM/YYYY')} {task.end}
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
        </>}
      </main>
      <Link to={`/kpi/${id}`}>
        <CornerButton icon='finish' />
      </Link>
      <Navbar />
    </div>
  )
}

export default TaskDetails