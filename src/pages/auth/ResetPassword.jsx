import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const ResetPassword = () => {
  return (
    <>
      <Link to='/confirm-code'>
        <ArrowLeftIcon className='absolute top-8 left-12 w-8' />
      </Link>
      <div className='flex flex-col items-center gap-6 p-12'>
        <LockClosedIcon className='w-16'/>
        <Typography variant='h3' className='font-inter font-black'>
          Mật khẩu mới
        </Typography>
        <div className='w-full flex flex-col items-start'>
          <Typography variant='h6' className='font-inter text-textGray mb-2'>
            Xác minh hoàn tất! Hãy đặt lại mật khẩu mới của bạn
          </Typography>
          <div className='w-full flex flex-col items-center gap-3'>
            <Input label='Mật khẩu mới' />
            <Input label='Xác nhận mật khẩu mới' />
          </div>
        </div>
        <Link to='/login' className='w-full'>
          <Button variant='filled' className='w-full bg-purple'>
            Hoàn tất
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

export default ResetPassword