import { CalendarIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'
import KPIProgressChart from './charts/KPIProgressChart';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

const DashboardKPI = (props) => {
  const { id, name, total, finished, due } = props;
  return (
    <Card className='w-full rounded-md overflow-hidden'>
      <CardBody className='flex justify-between bg-gray p-3'>
        <div className='flex flex-col items-start gap-3'>
          <Typography variant='h4' className='font-inter font-medium text-xl'>
            {name}
          </Typography>
          <div className='flex gap-1'>
            <Typography className='font-inter font-medium text-sm'>
              {`${finished}/${total}`}
            </Typography>
            <Typography className='font-inter font-normal text-sm'>
              công việc đã hoàn tất
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='w-4'/>
            <Typography className='font-inter font-medium text-sm'>
              Hạn {moment(due).format('DD/MM/YYYY')}
            </Typography>
          </div>
          <Link to={`/kpi/${id}`} state={props}>
            <Button variant='filled' className='bg-purple'>
              Chi tiết
            </Button>
          </Link>
        </div>
        <KPIProgressChart
          finished={finished}
          total={total}
        />
      </CardBody>
    </Card>
  )
}

export default DashboardKPI