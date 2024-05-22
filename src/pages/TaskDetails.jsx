import { Button, Card, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import KPIProgressChart from '../components/charts/KPIProgressChart';
import { CalendarIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CornerButton from '../components/CornerButton';
import Task from '../components/Task';

const TaskDetails = () => {
  const location = useLocation();
  const { name, due, finished, total, taskName, start, end, taskDue } = location.state;

  return (
    <div className='w-full'>
      <Header currentPage='Chi tiết công việc' backDestination='/kpi/1' state={location.state}/>
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
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
        
      </main>
      <CornerButton icon='add' />
      <Navbar />
    </div>
  )
}

export default TaskDetails