import { Card } from '@material-tailwind/react'
import { PieChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const TasksChart = () => {
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <Card className='w-full rounded-md overflow-hidden' ref={chartCanvasRef}>
      <PieChart
        margin={{right: width/2 }}
        colors={['#70DA56', '#DAC056', '#DA5670']}
        series={[
          { 
            data: [
              { id: 0, value: 10, label: 'Đã hoàn thành' },
              { id: 1, value: 15, label: 'Cần làm' },
              { id: 2, value: 20, label: 'Quá hạn' },
            ],
            outerRadius: width/6
          },
        ]}
        width={width}
        height={160}
      />
    </Card>
  )
}

export default TasksChart