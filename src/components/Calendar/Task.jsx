import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'

const Task = (props) => {
  const { name, kpi, startTime, endTime } = props;
  return (
    <Card className='w-full min-h-16 bg-darkGray'>
      <CardBody className='h-full flex items-center'>
        <div className='flex flex-col items-center mr-4'>
          <Typography className='text-sm'>
            {startTime}
          </Typography>
          <div className='text-sm'>|</div>
          <Typography className='text-sm'>
            {endTime}
          </Typography>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <Typography variant='h6'>
            {name}
          </Typography>
          <Typography className='text-sm'>
            {kpi}
          </Typography>
        </div>
      </CardBody>
    </Card>
  )
}

export default Task