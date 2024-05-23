import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { useSearchParams } from 'react-router-dom'
import AddKPIInfo from './AddKPIInfo'
import AddKPITasks from './AddKPITasks'
import AddKPIStepIndicator from '../../components/AddKPIStepIndicator'
import { getNextKpiId } from '../../utils/dataUtils'
import moment from 'moment'

const AddKPI = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get('step');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const kpi = {
      id: getNextKpiId(),
      name: event.target[0].value,
      description: event.target[1].value,
      due: moment(event.target[2].value, 'DD/MM/YYYY').toDate(),
      repeat: event.target[3].children[0].getAttribute('value'),
      weights: {
        quantity: 50,
        quality: 25,
        time: 25
      },
      tasks: []
    }
    console.log(kpi);
    console.log(tasks);
    //todo: add kpi and tasks
  }

  return (
    <div className='w-full'>
      <Header currentPage='Thêm KPI' backDestination={step == 1 ? '/dashboard' : `/add-kpi?step=1`} />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <AddKPIStepIndicator step={step} />
        <form onSubmit={handleSubmit}>
          <div className={`${step == 1 ? 'block' : 'hidden'}`}>
            <AddKPIInfo />
          </div>
          <div className={`${step == 2 ? 'block' : 'hidden'}`}>
            <AddKPITasks tasks={tasks} setTasks={setTasks} />
          </div>
        </form>
      </main>
      <Navbar />
    </div>
  )
}

export default AddKPI