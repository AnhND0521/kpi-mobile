import { CalendarIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'
import KPIProgressChart from './charts/KPIProgressChart';

const DashboardKPI = (props) => {
  const { name, totalTasks, completedTasks, dueDate } = props;
  return (
    <Card className='w-full rounded-md overflow-hidden'>
      <CardBody className='flex justify-between bg-gray'>
        <div className='flex flex-col items-start gap-2'>
          <Typography variant='h4' className='font-inter font-regular'>
            {name}
          </Typography>
          <div className='flex gap-1'>
            <Typography className='font-inter font-bold text-sm'>
              {`${completedTasks}/${totalTasks}`}
            </Typography>
            <Typography className='font-inter font-regular text-sm'>
              công việc đã hoàn tất
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='w-4'/>
            <Typography className='font-inter font-bold text-sm'>
              Hạn {dueDate}
            </Typography>
          </div>
          <Button variant='filled' className='bg-purple'>
            Chi tiết
          </Button>
        </div>
        <KPIProgressChart
          completedTasks={completedTasks}
          totalTasks={totalTasks}
        />
      </CardBody>
    </Card>
  )
}

export default DashboardKPI