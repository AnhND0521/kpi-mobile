import React, { useState } from 'react'
import DashboardKPI from './DashboardKPI'
import { getCurrentKpis, getNumberOfFinishedTasks } from '../utils/dataUtils';

const KPIList = () => {
  const kpis = getCurrentKpis();

  return (
    <div className='flex flex-col items-center gap-5 w-full'>
      {
        kpis.map(kpi => (
          <DashboardKPI 
            id={kpi.id}
            name={kpi.name}
            total={kpi.tasks.length}
            finished={getNumberOfFinishedTasks(kpi)}
            due={kpi.due}
          />
        ))
      }
    </div>
  )
}

export default KPIList