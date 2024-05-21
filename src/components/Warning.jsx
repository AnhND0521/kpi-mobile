import { Card, Typography } from '@material-tailwind/react'
import React from 'react'

const Warning = () => {
  return (
    <Card className='flex items-center justify-center px-2 py-1 mb-2 bg-[#FFF1A5]'>
      <Typography variant='h6' className='font-inter text-[#FF4545]'>
        Nhắc nhở: Bạn có 1 công việc quá hạn và 5 công việc đến hạn tuần này
      </Typography>
    </Card>
  )
}

export default Warning