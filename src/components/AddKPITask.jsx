import { CalendarIcon, MinusIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, Typography } from '@material-tailwind/react'
import moment from 'moment/moment';
import React, { useState } from 'react'

const AddKPITask = (props) => {
  const { id, name, date, start, end, handleRemove } = props;

  return (
    <Card className='w-full rounded-md overflow-hidden'>
      <CardBody className='flex items-center justify-between bg-gray p-3'>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col items-start gap-2'>
            <Typography variant='h4' className='font-inter font-medium text-base'>
              {name}
            </Typography>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-4'/>
              <Typography className='font-inter font-medium text-sm'>
                {moment(date).format('DD/MM/YYYY')}
              </Typography>
              <Typography className='font-inter font-medium text-sm ml-2'>
                {start}-{end}
              </Typography>
            </div>
          </div>
        </div>
        <div className='w-6 h-6 rounded-full bg-purple' onClick={handleRemove}>
          <MinusIcon color='white' />
        </div>
      </CardBody>
    </Card>
  )
}

export default AddKPITask