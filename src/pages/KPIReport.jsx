import { Button, Card, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import KPIProgressChart from '../components/charts/KPIProgressChart';
import { CalendarIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { findKpiById, getNumberOfFinishedTasks } from '../utils/dataUtils';
import moment from 'moment/moment';

const KPIReport = () => {
  const { id } = useParams();

  const kpi = findKpiById(id);
  const total = kpi.tasks.length;
  const finished = getNumberOfFinishedTasks(kpi);

  return (
    <div className='w-full'>
      <Header currentPage='Chi tiết KPI' backDestination='/dashboard' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <div className='min-h-36 flex items-center justify-between'>
          <div className='flex flex-col items-start gap-3'>
            <Typography variant='h5' className='font-inter font-regular font-medium'>
              Báo cáo tiến triển
            </Typography>
            <Typography className='font-inter font-regular text-sm'>
              Mục tiêu: Hoàn thành xuất sắc
            </Typography>
            <div className='flex gap-1'>
              <Typography className='font-inter font-medium text-sm'>
                {`${finished}/${total}`}
              </Typography>
              <Typography className='font-inter font-regular text-sm'>
                công việc đã hoàn tất
              </Typography>
            </div>
            <Typography className='font-inter font-regular text-sm'>
              Tiếp tục đi lên!
            </Typography>
          </div>
          <KPIProgressChart
            finished={finished}
            total={total}
          />
        </div>
      </main>
      <Navbar />
    </div>
  )
}

export default KPIReport