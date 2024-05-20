import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import logoblue from '../../assets/logoblue.png'
import google from '../../assets/google.png'
import microsoft from '../../assets/microsoft.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center gap-6 p-12'>
      <img src={logoblue} className='w-16' />
      <Typography variant='h3' className='font-inter font-black'>
        Đăng nhập
      </Typography>
      <div className='w-full flex flex-col items-center gap-3'>
        <Input label='E-mail' />
        <Input label='Mật khẩu' />
      </div>
      <Link to='/forgot-password'>
        <Typography variant='paragraph' className='text-textBlue'>
          Quên mật khẩu?
        </Typography>
      </Link>
      <div className='w-full flex flex-col items-center gap-3'>
        <Link to='/dashboard' className='w-full'>
          <Button variant='filled' className='w-full bg-purple'>
            Đăng nhập
          </Button>
        </Link>
        <Link to='/register' className='w-full'>
          <Button variant='outlined' className='w-full border-purple text-purple'>
            Đăng ký
          </Button>
        </Link>        
      </div>
      <Typography variant='h4' className='font-inter font-black'>
        hoặc
      </Typography>
      <div className='w-full flex justify-center gap-3'>
        <IconButton variant='outlined' className='border-textGray'>
          <img src={google} className='w-20' />
        </IconButton>
        <IconButton variant='outlined' className='border-textGray'>
          <img src={microsoft} className='w-20' />
        </IconButton>
      </div>
    </div>
  )
}

export default Login