import { CalendarIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Task = (props) => {
  const { name, due, finished, total, taskName, start, end, taskDue, checked } = props;
  return (
    <Link to='/kpi/1/task/1' state={ props } className='w-full'>
      <Card className='w-full rounded-md overflow-hidden'>
        <CardBody className='flex justify-between bg-gray p-3'>
          <div className='flex items-center gap-3'>
            <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' checked={checked}/>
            <div className='flex flex-col items-start gap-2'>
              <Typography variant='h4' className='font-inter font-medium text-base'>
                {taskName}
              </Typography>
              <div className='flex items-center gap-2'>
                <CalendarIcon className='w-4'/>
                <Typography className='font-inter font-medium text-sm'>
                  {taskDue}
                </Typography>
                <Typography className='font-inter font-medium text-sm ml-2'>
                  {start}-{end}
                </Typography>
              </div>
            </div>
          </div>
          <ChevronRightIcon className='w-8' />
        </CardBody>
      </Card>
    </Link>
  )
}

export default Task