import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Button, Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'
import { findKpiById, getNextTaskId, saveKpi } from '../../utils/dataUtils.js'
import AddKPITask from '../../components/AddKPITask'
import { parseDate } from '../../utils/dateShit.js'

const AddKPITasks = (props) => {
  const { kpi } = props;
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [priority, setPriority] = useState(2)
  const [repeat, setRepeat] = useState(0);
  const [reminder, setReminder] = useState(0);

  const [ tasks, setTasks ] = useState(kpi.tasks);

  const navigate = useNavigate();

  const [ count, setCount ] = useState(0);

  const handleAddTask = () => {
    const task = {
      id: count,
      name: name,
      date: date,
      start: start,
      end: end,
      status: date < new Date() ? 2 : 0,
      priority: priority,
      repeat: repeat,
      noti: reminder,
      quality: 5
    }
    console.log(task);
    setTasks([...tasks, task]);
    setName('');
    setDate('');
    setStart('');
    setEnd('');
    setPriority(2);
    setRepeat(0);
    setReminder(0);
    setCount(count+1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    kpi.tasks = tasks;
    saveKpi(kpi);
    navigate('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4'>
        <Typography className='font-inter font-semibold text-lg self-start'>
          Thêm nhiệm vụ
        </Typography>
        <div className='flex flex-col gap-4 items-center'>
          <Input label='Tên nhiệm vụ' value={name} onChange={(event) => setName(event.target.value)} required/>
          <DateInput value={date} handleChange={setDate} required/>
          <div className="grid grid-cols-2 w-full gap-2">
            <Input 
              label='Bắt đầu' 
              value={start} 
              onChange={(event) => setStart(event.target.value)}
              required
            />
            <Input 
              label='Kết thúc'
              value={end} 
              onChange={(event) => setEnd(event.target.value)}
              required
            />
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
          <Button 
            variant='filled'
            className='w-full bg-purple'
            onClick={handleAddTask}
          >
            Thêm
          </Button>
        </div>
        <Typography className='font-inter font-semibold text-lg self-start'>
          Nhiệm vụ đã thêm
        </Typography>
        <div className='flex flex-col gap-4 items-center'>
          {tasks.map(task => 
            <AddKPITask
              id={task.id}
              name={task.name}
              date={task.date}
              start={task.start}
              end={task.end}
              handleRemove={() => {
                console.log(tasks);
                for (let i=0; i<tasks.length; i++) {
                  if (tasks[i].id === task.id) {
                    tasks.splice(i,1);
                    let clone = tasks.map(t => t);
                    setTasks(clone);
                    console.log(task);
                    return;
                  }
                }
              }}
            />  
          )}
        </div>

        <CornerButton icon='finish' type='submit' />
      </div>
    </form>
  )
}

export default AddKPITasks