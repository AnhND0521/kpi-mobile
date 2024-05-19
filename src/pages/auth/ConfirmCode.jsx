import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const ConfirmCode = () => {
  return (
    <>
      <Link to='/forgot-password'>
        <ArrowLeftIcon className='absolute top-8 left-12 w-8' />
      </Link>
      <div className='flex flex-col items-center gap-6 p-12'>
        <LockClosedIcon className='w-16'/>
        <Typography variant='h3' className='font-inter font-black'>
          Xác minh
        </Typography>
        <div className='w-full flex flex-col items-start'>
          <Typography variant='h6' className='font-inter text-textGray mb-2'>
            Nhập mã xác minh đã được gửi đến email của bạn
          </Typography>
          <Input label='XXX-XXX' />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <Typography variant='paragraph'>
            Bạn chưa nhận được mã?
          </Typography>
          <Typography variant='paragraph' className='text-textBlue'>
            Gửi lại
          </Typography>
        </div>
        <Link to='/reset-password' className='w-full'>
          <Button variant='filled' className='w-full bg-purple'>
            Tiếp tục
          </Button>
        </Link>        
        <div className='flex items-center justify-center gap-2'>
          <Typography variant='paragraph'>
            Bạn đã có tài khoản?
          </Typography>
          <Link to='/login'>
            <Typography variant='paragraph' className='text-textBlue'>
              Đăng nhập
            </Typography>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ConfirmCode