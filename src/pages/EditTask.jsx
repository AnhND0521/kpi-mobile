import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import CornerButton from '../components/CornerButton'
import { Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../components/DateInput'
import { findKpiById, findTaskById } from '../utils/dataUtils.js'

const EditTask = () => {
  const { id, taskId } = useParams();
  console.log(id, taskId);
  const kpi = findKpiById(id);
  const task = findTaskById(id, taskId);
  console.log(kpi, task);
  const [priority, setPriority] = useState(1);
  const [repeat, setRepeat] = useState(2);
  const [reminder, setReminder] = useState(3);

  return (
    <div className='w-full'>
      <Header currentPage='Chỉnh sửa nhiệm vụ' backDestination={`/kpi/${id}/task/${taskId}`} />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <Typography className='font-inter font-semibold text-lg self-start'>
          Chỉnh sửa nhiệm vụ
        </Typography>
        <div className='flex flex-col gap-4 items-center'>
          <Input label='Tên nhiệm vụ' value={task.name} required />
          <DateInput value={task.date}/>
          <div className=" flex gap-2 w-full">
            <Input label='Bắt đầu' value={task.start} required />
            <Input label='Kết thúc' value={task.end} required />
          </div>
          <Select value={priority} label='Ưu tiên' onChange={(val) => setPriority(val)}>
            <Option value={0}>Thấp</Option>
            <Option value={1}>Trung bình</Option>
            <Option value={2}>Cao</Option>
          </Select>
          <Select value={repeat} label='Lặp lại' onChange={(val) => setRepeat(val)}>
            <Option value={0}>Không lặp lại</Option>
            <Option value={1}>Hàng ngày</Option>
            <Option value={2}>Hàng tuần</Option>
            <Option value={3}>Hàng tháng</Option>
            <Option value={4}>Hàng năm</Option>
          </Select>
          <Select value={reminder} label='Nhắc nhở' onChange={(val) => setReminder(val)}>
            <Option value={0}>Không nhắc nhở</Option>
            <Option value={1}>Trước 5 phút</Option>
            <Option value={2}>Trước 30 phút</Option>
            <Option value={3}>Trước 1 ngày</Option>
            <Option value={4}>Trước 3 ngày</Option>
          </Select>
        </div>
        <Link to={`/kpi/${id}/task/${taskId}`}>
          <CornerButton icon='finish' />
        </Link>
      </main>
      <Navbar />
    </div>
  )
}

export default EditTask