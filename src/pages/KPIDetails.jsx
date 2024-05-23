import { Button, Card, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import KPIProgressChart from '../components/charts/KPIProgressChart';
import { CalendarIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CornerButton from '../components/CornerButton';
import Task from '../components/Task';
import { findKpiById, getNumberOfFinishedTasks } from '../utils/dataUtils';
import moment from 'moment/moment';

const KPIDetails = () => {
  const location = useLocation();
  // const { name, finished, total, due } = location.state;
  const { id } = useParams();
  console.log(id);

  const kpi = findKpiById(id);
  const total = kpi.tasks.length;
  const finished = getNumberOfFinishedTasks(kpi);
  const upcoming = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) >= new Date()).length;
  const pastDue = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) < new Date()).length;

  return (
    <div className='w-full'>
      <Header currentPage='Chi tiết KPI' backDestination='/dashboard' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <div className='w-full flex justify-between items-center'>
          <Typography variant='h4' className='font-inter font-regular font-medium'>
            {kpi.name}
          </Typography>
          <div>
            <Link to={`/kpi/${id}/edit`} state={location.state}>
              <IconButton variant='outlined' className='border-purple w-8 h-8'>
                <PencilIcon className='w-6 text-purple'/>
              </IconButton>
            </Link>
            <IconButton variant='outlined' className='border-purple w-8 h-8 ml-2'>
              <TrashIcon className='w-6 text-purple'/>
            </IconButton>
          </div>
        </div>
        <div className='min-h-36 flex items-between justify-between'>
          <div className='flex flex-col items-start gap-5'>
            <div className='flex gap-1'>
              <Typography className='font-inter font-medium text-sm'>
                {`${finished}/${total}`}
              </Typography>
              <Typography className='font-inter font-regular text-sm'>
                công việc đã hoàn tất
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-4'/>
              <Typography className='font-inter font-medium text-sm'>
                Hạn {moment(kpi.due).format('DD/MM/YYYY')}
              </Typography>
            </div>
            <Link to={`/kpi/${id}/report`}>
              <Button variant='filled' className='flex gap-2 items-center bg-purple py-2'>
                Xem báo cáo
                <ChevronRightIcon className='w-6 text-white'/>
              </Button>
            </Link>
          </div>
          <KPIProgressChart
            finished={finished}
            total={total}
          />
        </div>
        <hr className='border border-darkGray' />
        <div className='w-full flex justify-between items-center'>
          <Typography variant='h5' className='font-inter font-regular font-medium'>
            Danh sách công việc
          </Typography>
          {/* <div className='flex items-center gap-2'>
            <FunnelIcon className='w-6'/>
            <Typography className='font-inter font-semibold text-sm'>
              Lọc
            </Typography>
          </div> */}
        </div>
        <Typography variant='h6' className='font-inter font-regular font-medium self-start'>
          Công việc sắp tới ({upcoming})
        </Typography>
        <div className='flex flex-col items-center gap-3'>
          {kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) >= new Date()).map(t => (
            <Task
              name={kpi.name}
              due={t.date}
              taskName={t.name}
              start={t.start}
              end={t.end}
              taskDue={moment(t.date).format('DD/MM/YYYY')}
            />))
          }
        </div>
        <Typography variant='h6' className='font-inter font-regular font-medium text-red self-start'>
          Công việc quá hạn ({pastDue})
        </Typography>
        {kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) < new Date()).map(t => (
            <Task
              name={kpi.name}
              due={t.date}
              taskName={t.name}
              start={t.start}
              end={t.end}
              taskDue={moment(t.date).format('DD/MM/YYYY')}
            />))
          }
        <Typography variant='h6' className='font-inter font-regular font-medium text-green self-start'>
          Công việc đã hoàn thành ({finished})
        </Typography>
        <div className='flex flex-col items-center gap-3'>
        {kpi.tasks.filter(t => t.status === 1).map(t => (
            <Task
              name={kpi.name}
              due={t.date}
              checked={true}
              taskName={t.name}
              start={t.start}
              end={t.end}
              taskDue={moment(t.date).format('DD/MM/YYYY')}
            />))
          }
        </div>
      </main>
      <CornerButton icon='add' />
      <Navbar />
    </div>
  )
}

export default KPIDetails