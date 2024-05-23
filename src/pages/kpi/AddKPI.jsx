import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { Link, useSearchParams } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'
import step1 from '../../assets/add-kpi-step-1.png'
import AddKPIInfo from './AddKPIInfo'
import AddKPITasks from './AddKPITasks'
import AddKPIStepIndicator from '../../components/AddKPIStepIndicator'

const AddKPI = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get('step');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='w-full'>
      <Header currentPage='Thêm KPI' backDestination={step == 1 ? '/dashboard' : `/add-kpi?step=1`} />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <AddKPIStepIndicator step={step} />
        {step == 1 ? <AddKPIInfo /> : <AddKPITasks handleSubmit={handleSubmit}/>}
      </main>
      <Navbar />
    </div>
  )
}

export default AddKPI