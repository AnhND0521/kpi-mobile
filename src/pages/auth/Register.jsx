import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import logoblue from '../../assets/logoblue.png'
import google from '../../assets/google.png'
import microsoft from '../../assets/microsoft.png'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'


const Register = () => {
  return (
    <>    
      <BackButton to='/login' color='black' />
      <div className='flex flex-col items-center gap-6 p-12'>
        <img src={logoblue} className='w-16' />
        <Typography variant='h3' className='font-inter font-black'>
          Tạo tài khoản
        </Typography>
        <div className='w-full flex flex-col items-center gap-3'>
          <Input label='E-mail' />
          <Input label='Mật khẩu' />
          <Input label='Xác nhận mật khẩu' />
        </div>
        <Link to='/dashboard' className='w-full'>
          <Button variant='filled' className='w-full bg-purple'>
            Đăng ký
          </Button>
        </Link>        
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

export default Register