import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import BackButton from '../../components/BackButton'

const ConfirmCode = () => {
  return (
    <>
      <BackButton to='/forgot-password' color='black' />
      <div className='flex flex-col items-center gap-6 p-12 mt-14'>
        <LockClosedIcon className='w-16'/>
        <Typography variant='h3' className='font-inter font-black font-semibold'>
          Xác minh
        </Typography>
        <div className='w-full flex flex-col items-start'>
          <Typography variant='h6' className='font-inter mb-2 text-left'>
            Nhập mã xác minh đã được gửi đến email của bạn:
          </Typography>
          <Input label='XXX-XXX' />
        </div>
        <div className='flex w-full items-center justify-start gap-2'>
          <Typography variant='paragraph' className='font-medium'>
            Bạn chưa nhận được mã?
          </Typography>
          <Typography variant='paragraph' className='text-textBlue font-medium'>
            Gửi lại
          </Typography>
        </div>
        <Link to='/reset-password' className='w-full'>
          <Button variant='filled' className='w-full bg-purple'>
            Tiếp tục
          </Button>
        </Link>        
        <div className='flex w-full items-start justify-start gap-2'>
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