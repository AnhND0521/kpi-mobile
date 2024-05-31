import { ArrowRightIcon, CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { IconButton, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ImportKPIDialog from './ImportKPIDialog';
import TemplateDialog from './TemplateDialog';

const CornerButton = (props) => {
  const { icon, type, setKpis } = props;
  const [ openImport, setOpenImport ] = useState(false);
  const [ openTemplate, setOpenTemplate ] = useState(false);
  return (
    type == 'menu' ? 
    <>
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
            Thêm thủ công
          </MenuItem>
        </Link>
        <MenuItem onClick={() => setOpenTemplate(true)}>Sử dụng mẫu</MenuItem>
        <MenuItem onClick={() => setOpenImport(true)}>Nhập từ hệ thống khác</MenuItem>
      </MenuList>
    </Menu>
    <ImportKPIDialog open={openImport} setOpen={setOpenImport} setKpis={setKpis}/>
    <TemplateDialog open={openTemplate} setOpen={setOpenTemplate} setKpis={setKpis}/>
    </> :
    <button className='fixed bottom-20 right-4 flex items-center justify-center w-16 h-16 bg-purple shadow-lg rounded-full z-50' type={type}>
      { icon === 'add' && <PlusIcon className='text-white w-12' /> }
      { icon === 'next' && <ArrowRightIcon className='text-white w-12' /> }
      { icon === 'finish' && <CheckIcon className='text-white w-12' /> }
    </button>
  )
}

export default CornerButton