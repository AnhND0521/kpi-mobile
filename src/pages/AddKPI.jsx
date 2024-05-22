import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import CornerButton from '../components/CornerButton'
import { Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../components/DateInput'

const AddKPI = () => {
  return (
    <div className='w-full'>
      <Header currentPage='Thêm KPI' backDestination='/dashboard' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <Typography className='font-inter font-bold text-lg self-start'>
          Thông tin KPI
        </Typography>
        <div className='flex flex-col gap-2 items-center'>
          <Input label='Tên KPI' required/>
          <Input label='Mô tả'/>
          <DateInput />
          <Select label='Lặp lại'>
            <Option>Có</Option>
            <Option>Không</Option>
          </Select>
          <Select label='Nhắc nhở'>
            <Option>Có</Option>
            <Option>Không</Option>
          </Select>
        </div>
        <div className='grid grid-cols-3 grid-rows-4'>
          <div className='col-span-3 flex items-center'>
            <div className='flex justify-start w-2/3'>
              <Typography className='font-inter font-bold text-md'>
                Yếu tố đánh giá
              </Typography>
            </div>
            <div className='flex justify-start w-1/3'>
              <Typography className='font-inter font-bold text-md'>
                Trọng số
              </Typography>
            </div>
          </div>
          <div className='col-span-3 flex items-center'>
            <div className='flex items-center gap-2 w-2/3'>
              <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' />
              <div className='flex flex-col gap-1 items-start'>
                <Typography className='font-inter'>
                  Số lượng
                </Typography>
                <Typography className='font-inter text-textGray text-xs'>
                  Tỷ lệ nhiệm vụ hoàn thành
                </Typography>
              </div>
            </div>
            <div className='flex justify-start gap-1 items-center w-1/3'>
              <input type="text" className='w-12 h-8 px-2 border border-darkGray rounded-md' />
              <Typography className='font-inter font-regular text-lg'>
                %
              </Typography>
            </div>
          </div>
          <div className='col-span-3 flex items-center'>
            <div className='flex items-center gap-2 w-2/3'>
              <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' />
              <div className='flex flex-col gap-1 items-start'>
                <Typography className='font-inter'>
                  Chất lượng
                </Typography>
                <Typography className='font-inter text-textGray text-xs'>
                  Chất lượng thực hiện nhiệm vụ
                </Typography>
              </div>
            </div>
            <div className='flex justify-start gap-1 items-center w-1/3'>
              <input type="text" className='w-12 h-8 px-2 border border-darkGray rounded-md' />
              <Typography className='font-inter font-regular text-lg'>
                %
              </Typography>
            </div>
          </div>
          <div className='col-span-3 flex items-center'>
            <div className='flex items-center gap-2 w-2/3'>
              <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' />
              <div className='flex flex-col gap-1 items-start'>
                <Typography className='font-inter'>
                  Thời gian
                </Typography>
                <Typography className='font-inter text-textGray text-xs'>
                  Số thời gian hoàn thành trước hạn
                </Typography>
              </div>
            </div>
            <div className='flex justify-start gap-1 items-center w-1/3'>
              <input type="text" className='w-12 h-8 px-2 border border-darkGray rounded-md' />
              <Typography className='font-inter font-regular text-lg'>
                %
              </Typography>
            </div>
          </div>
        </div>
        <Link to='/add-kpi'>
          <CornerButton icon='next' />
        </Link>
      </main>
      <Navbar />
    </div>
  )
}

export default AddKPI