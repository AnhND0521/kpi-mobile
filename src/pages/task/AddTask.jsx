import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'
import { findKpiById, findTaskById, getNextTaskId, saveKpi } from '../../utils/dataUtils.js'

const AddTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const kpi = findKpiById(id);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [priority, setPriority] = useState(2);
  const [repeat, setRepeat] = useState(0);
  const [reminder, setReminder] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: getNextTaskId(findKpiById(id)),
      name: name,
      date: date.toISOString(),
      start: start,
      end: end,
      status: date < new Date() ? 2 : 0,
      priority: priority,
      repeat: repeat,
      noti: reminder,
      quality: 5
    }
    console.log(newTask);
    kpi.tasks.push(newTask);
    saveKpi(kpi);
    navigate(`/kpi/${id}`);
  }

  return (
    <div className='w-full'>
      <Header currentPage='Thêm nhiệm vụ' backDestination={`/kpi/${id}`} />
      <main className='mt-16 mb-32 p-4 overflow-y-scroll'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <Typography className='font-inter font-semibold text-lg self-start'>
            Thêm nhiệm vụ
          </Typography>
          <div className='flex flex-col gap-4 items-center'>
            <Input label='Tên nhiệm vụ' value={name} required onChange={(event) => setName(event.target.value)}/>
            <DateInput value={date} handleChange={setDate} required />
            <div className=" flex gap-2 w-full">
              <Input label='Bắt đầu' type='time' value={start} required onChange={(event) => setStart(event.target.value)}/>
              <Input label='Kết thúc' type='time' value={end} required onChange={(event) => setEnd(event.target.value)}/>
            </div>
            <Select value={priority} label='Ưu tiên' onChange={(val) => setPriority(val)}>
              <Option value={1}>Thấp</Option>
              <Option value={2}>Trung bình</Option>
              <Option value={3}>Cao</Option>
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
          <CornerButton icon='finish' type='submit' />
        </form>
      </main>
      <Navbar />
    </div>
  )
}

export default AddTask