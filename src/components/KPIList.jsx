import React from 'react'
import DashboardKPI from './DashboardKPI'

const KPIList = () => {
  return (
    <div className='flex flex-col items-center gap-3 w-full'>
      <DashboardKPI 
        name='Giảng dạy'
        total={60}
        finished={42}
        due='31/06/2024'
      />
      <DashboardKPI 
        name='Nghiên cứu'
        total={60}
        finished={42}
        due='31/06/2024'
      />
      <DashboardKPI 
        name='Phục vụ'
        total={60}
        finished={42}
        due='31/06/2024'
      />
    </div>
  )
}

export default KPIList