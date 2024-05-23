import { Button, Card, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import KPIProgressChart from '../../components/charts/KPIProgressChart';
import { CalendarIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { calculateKpiScore, findKpiById, getNumberOfFinishedTasks } from '../../utils/dataUtils';
import moment from 'moment/moment';
import KPITasksChart from '../../components/charts/KPITasksChart';
import KPIEfficiencyChart from '../../components/charts/KPIEfficiencyChart';
import KPIProgressOverTimeChart from '../../components/charts/KPIProgressOverTimeChart';

const KPIReport = () => {
  const { id } = useParams();

  const kpi = findKpiById(id);
  const total = kpi.tasks.length;
  const finished = getNumberOfFinishedTasks(kpi);
  const upcoming = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) >= new Date()).length;
  const overdue = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) < new Date()).length;

  return (
    <div className='w-full'>
      <Header currentPage='Chi tiết KPI' backDestination={`/kpi/${id}`} />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <div className='flex flex-col items-start gap-3'>
          <Typography variant='h5' className='font-inter font-regular font-medium'>
            Tổng quan nhiệm vụ
          </Typography>
          <div className='w-full grid grid-cols-3 gap-4'>
            <Card className='w-full flex flex-col items-center p-4 rounded-md'>
              <Typography variant='h4' className='font-inter font-semibold text-purple'>
                {upcoming}
              </Typography>
              <Typography className='leading-5'>
                Sắp tới
              </Typography>
            </Card>
            <Card className='w-full flex flex-col items-center p-4 rounded-md'>
              <Typography variant='h4' className='font-inter font-semibold text-green'>
                {finished}
              </Typography>
              <Typography className='leading-5'>
                Đã hoàn thành
              </Typography>
            </Card>
            <Card className='w-full flex flex-col items-center p-4 rounded-md'>
              <Typography variant='h4' className='font-inter font-semibold text-red'>
                {overdue}
              </Typography>
              <Typography className='leading-5'>
                Quá hạn
              </Typography>
            </Card>
          </div>
        </div>
        <div className='min-h-36 flex items-between justify-between mt-3'>
          <div className='flex flex-col items-start gap-4'>
            <Typography variant='h5' className='font-inter font-regular font-medium'>
              Báo cáo tiến triển
            </Typography>
            <Typography className='font-inter font-regular text-sm'>
              Mục tiêu: Hoàn thành xuất sắc
            </Typography>
            <div className='flex gap-1'>
              <Typography className='font-inter font-medium text-sm'>
                {`${finished}/${total}`}
              </Typography>
              <Typography className='font-inter font-regular text-sm'>
                nhiệm vụ đã hoàn tất
              </Typography>
            </div>
            <Typography className='font-inter font-regular text-sm'>
              Dự báo cần 7 ngày nữa để hoàn tất
            </Typography>
          </div>
          <KPIProgressChart
            progress={calculateKpiScore(kpi)/100}
          />
        </div>
        <KPIProgressOverTimeChart />
        <div className='flex flex-col items-start gap-3 mt-3'>
          <Typography variant='h5' className='font-inter font-regular font-medium'>
            Biểu đồ tổng quan
          </Typography>
          <KPITasksChart 
            finished={finished}
            upcoming={upcoming}
            overdue={overdue}
            total={total}
          />
        </div>
        <div className='flex flex-col items-start gap-3 mt-3'>
          <Typography variant='h5' className='font-inter font-regular font-medium'>
            Số hoạt động gần đây
          </Typography>
          <KPIEfficiencyChart />
        </div>
      </main>
      <Navbar />
    </div>
  )
}

export default KPIReport