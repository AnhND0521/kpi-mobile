import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import BackButton from '../../components/BackButton'

const ResetPassword = () => {
  return (
    <>
      <BackButton to='/confirm-code' color='black' />
      <div className='flex flex-col items-center gap-6 p-12 mt-14'>
        <LockClosedIcon className='w-16'/>
        <Typography variant='h3' className='font-inter font-black'>
          Mật khẩu mới
        </Typography>
        <div className='w-full flex flex-col items-start'>
          <Typography variant='h6' className='text-left font-inter mb-2'>
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

export default ResetPassword