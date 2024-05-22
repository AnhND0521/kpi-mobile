import React from 'react'
import DashboardKPI from './DashboardKPI'

const KPIList = () => {
  return (
    <div className='flex flex-col items-center gap-3 w-full'>
      <DashboardKPI 
        name='Giảng dạy'
        totalTasks={60}
        completedTasks={42}
        dueDate='31/06/2024'
      />
      <DashboardKPI 
        name='Nghiên cứu'
        totalTasks={60}
        completedTasks={42}
        dueDate='31/06/2024'
      />
      <DashboardKPI 
        name='Phục vụ'
        totalTasks={60}
        completedTasks={42}
        dueDate='31/06/2024'
      />
    </div>
  )
}

export default KPIList