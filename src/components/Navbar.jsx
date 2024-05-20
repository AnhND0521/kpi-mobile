import React, { useState } from 'react';
import { 
  HomeIcon, 
  Cog6ToothIcon, 
  CalendarIcon, 
  BellIcon
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconActive, 
  Cog6ToothIcon as Cog6ToothIconActive, 
  CalendarIcon as CalendarIconActive, 
  BellIcon as BellIconActive
} from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='fixed bottom-0 w-full h-16 flex grid grid-cols-4 bg-gray shadow-md'>
      <div
        className={`flex flex-col items-center justify-center gap-1 w-full h-full p-2 ${activeTab === 0 && 'bg-pink'}`}
        onClick={() => setActiveTab(0)}
      >
        {
          activeTab === 0 ? 
          <HomeIconActive  className='w-7 text-purple'/> : 
          <HomeIcon  className='w-7 text-textGray'/>
        }
        <Typography 
          variant='h6' 
          className={`font-inter text-xs text-${activeTab === 0 ? 'purple' : 'textGray'}`}
        >
          Trang chủ
        </Typography>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-1 w-full h-full p-2 ${activeTab === 1 && 'bg-pink'}`}
        onClick={() => setActiveTab(1)}
      >
        {
          activeTab === 1 ? 
          <CalendarIconActive  className='w-7 text-purple'/> : 
          <CalendarIcon  className='w-7 text-textGray'/>
        }
        <Typography 
          variant='h6' 
          className={`font-inter text-xs text-${activeTab === 1 ? 'purple' : 'textGray'}`}
        >
          Lịch trình
        </Typography>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-1 w-full h-full p-2 ${activeTab === 2 && 'bg-pink'}`}
        onClick={() => setActiveTab(2)}
      >
        {
          activeTab === 2 ? 
          <BellIconActive  className='w-7 text-purple'/> : 
          <BellIcon  className='w-7 text-textGray'/>
        }
        <Typography 
          variant='h6' 
          className={`font-inter text-xs text-${activeTab === 2 ? 'purple' : 'textGray'}`}
        >
          Thông báo
        </Typography>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-1 w-full h-full p-2 ${activeTab === 3 && 'bg-pink'}`}
        onClick={() => setActiveTab(3)}
      >
        {
          activeTab === 3 ? 
          <Cog6ToothIconActive  className='w-7 text-purple'/> : 
          <Cog6ToothIcon  className='w-7 text-textGray'/>
        }
        <Typography 
          variant='h6' 
          className={`font-inter text-xs text-${activeTab === 3 ? 'purple' : 'textGray'}`}
        >
          Cài đặt
        </Typography>
      </div>
    </div>
  )
}

export default Navbar