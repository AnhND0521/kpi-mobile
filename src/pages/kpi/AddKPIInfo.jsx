import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'

const AddKPIInfo = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [repeat, setRepeat] = useState(0);
  const [reminder, setReminder] = useState(0);

  return (
    <>
      <Typography className='font-inter font-semibold text-lg self-start'>
        Thông tin KPI
      </Typography>
      <div className='flex flex-col gap-4 items-center'>
        <Input value={name} label='Tên KPI' onChange={event => setName(event.target.value)} required />
        <Input value={description} label='Mô tả' onChange={event => setDescription(event.target.value)}/>
        <DateInput value={date} handleChange={setDate} required />
        <Select value={repeat} label='Lặp lại' onChange={val => setRepeat(val)}>
          <Option value={0}>Không lặp lại</Option>
          <Option value={1}>Hàng ngày</Option>
          <Option value={2}>Hàng tuần</Option>
          <Option value={3}>Hàng tháng</Option>
          <Option value={4}>Hàng năm</Option>
        </Select>
        <Select value={reminder} label='Nhắc nhở' onChange={val => setReminder(val)}>
          <Option value={0}>Không nhắc nhở</Option>
          <Option value={1}>Trước 5 phút</Option>
          <Option value={2}>Trước 30 phút</Option>
          <Option value={3}>Trước 1 ngày</Option>
          <Option value={4}>Trước 3 ngày</Option>
        </Select>
      </div>
      <div className='grid grid-cols-3 grid-rows-4 gap-y-1.5'>
        <div className='col-span-3 flex items-center'>
          <div className='flex justify-start w-2/3'>
            <Typography className='font-inter font-semibold text-md'>
              Chỉ tiêu đánh giá
            </Typography>
          </div>
          <div className='flex justify-start w-1/3'>
            <Typography className='font-inter font-semibold text-md'>
              Trọng số
            </Typography>
          </div>
        </div>
        <div className='col-span-3 flex items-center'>
          <div className='flex items-center gap-2 w-2/3'>
            <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' checked/>
            <div className='flex flex-col items-start'>
              <Typography className='font-inter'>
                Số lượng
              </Typography>
              <Typography className='font-inter text-textGray text-xs'>
                Tỷ lệ nhiệm vụ hoàn thành
              </Typography>
            </div>
          </div>
          <div className='flex justify-start gap-1 items-center w-1/3'>
            <input type="number" value={50} className='w-12 h-8 px-2 border border-darkGray rounded-md' />
            <Typography className='font-inter font-regular text-lg'>
              %
            </Typography>
          </div>
        </div>
        <div className='col-span-3 flex items-center'>
          <div className='flex items-center gap-2 w-2/3'>
            <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' checked/>
            <div className='flex flex-col items-start'>
              <Typography className='font-inter'>
                Chất lượng
              </Typography>
              <Typography className='font-inter text-textGray text-xs'>
                Chất lượng thực hiện nhiệm vụ
              </Typography>
            </div>
          </div>
          <div className='flex justify-start gap-1 items-center w-1/3'>
            <input type="number" value={25} className='w-12 h-8 px-2 border border-darkGray rounded-md' />
            <Typography className='font-inter font-regular text-lg'>
              %
            </Typography>
          </div>
        </div>
        <div className='col-span-3 flex items-center'>
          <div className='flex items-center gap-2 w-2/3'>
            <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' checked/>
            <div className='flex flex-col items-start'>
              <Typography className='font-inter'>
                Thời gian
              </Typography>
              <Typography className='font-inter text-textGray text-xs'>
                Số thời gian hoàn thành trước hạn
              </Typography>
            </div>
          </div>
          <div className='flex justify-start gap-1 items-center w-1/3'>
            <input type="number" value={25} className='w-12 h-8 px-2 border border-darkGray rounded-md' />
            <Typography className='font-inter font-regular text-lg'>
              %
            </Typography>
          </div>
        </div>
      </div>
      <Link to={`/add-kpi?step=2`}>
        <CornerButton icon='next' type='button' />
      </Link>
    </>
  )
}

export default AddKPIInfo