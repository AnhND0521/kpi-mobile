import React, { useState } from 'react'
import DashboardKPI from './DashboardKPI'
import { getNumberOfFinishedTasks } from '../utils/dataUtils';

const KPIList = (props) => {
  const { kpis } = props;

  return (
    <div className='flex flex-col items-center gap-5 w-full'>
      {
        kpis.map(kpi => (
          <DashboardKPI 
            kpi={kpi}
          />
        ))
      }
    </div>
  )
}

export default KPIList