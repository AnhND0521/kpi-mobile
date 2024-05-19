import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'

const ForgotPassword = () => {
  return (
    <div className='flex flex-col items-center gap-6 p-12'>
      <LockClosedIcon className='w-16'/>
      <Typography variant='h3' className='font-inter font-black'>
        Quên mật khẩu
      </Typography>
      <div className='w-full flex flex-col items-start'>
        <Typography variant='h6' className='font-inter text-textGray mb-2'>
          Nhập e-mail của bạn
        </Typography>
        <Input label='E-mail' />
      </div>
      <Link to='/register' className='w-full'>
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
  )
}

export default ForgotPassword