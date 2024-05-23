import { ArrowRightIcon, CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { IconButton, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom';

const CornerButton = (props) => {
  const { icon, type } = props;
  return (
    type == 'menu' ? 
    <Menu placement='top-end'>
      <MenuHandler>
        <button className='fixed bottom-20 right-4 flex items-center justify-center w-16 h-16 bg-purple shadow-lg rounded-full z-50' type={type}>
          { icon === 'add' && <PlusIcon className='text-white w-12' /> }
          { icon === 'next' && <ArrowRightIcon className='text-white w-12' /> }
          { icon === 'finish' && <CheckIcon className='text-white w-12' /> }
        </button>
      </MenuHandler>
      <MenuList>
        <Link to='/add-kpi?step=1'>
          <MenuItem>
            Thêm KPI
          </MenuItem>
        </Link>
        <MenuItem>Sex KPI</MenuItem>
      </MenuList>
    </Menu> :
    <button className='fixed bottom-20 right-4 flex items-center justify-center w-16 h-16 bg-purple shadow-lg rounded-full z-50' type={type}>
      { icon === 'add' && <PlusIcon className='text-white w-12' /> }
      { icon === 'next' && <ArrowRightIcon className='text-white w-12' /> }
      { icon === 'finish' && <CheckIcon className='text-white w-12' /> }
    </button>
  )
}

export default CornerButton