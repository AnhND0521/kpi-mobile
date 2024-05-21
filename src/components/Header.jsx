import { Typography } from '@material-tailwind/react'
import React from 'react'
import logo from '../assets/logo.png';

const Header = (props) => {
  return (
    <header className='fixed top-0 flex items-center w-full h-16 px-3 py-3 bg-purple z-50'>
      <img src={logo} className='absolute h-10 ml-3' />
      <div className='w-screen'>
        <Typography variant='h5' color='white' className='font-inter'>
          {props.currentPage}
        </Typography>
      </div>
    </header>
  )
}

export default Header