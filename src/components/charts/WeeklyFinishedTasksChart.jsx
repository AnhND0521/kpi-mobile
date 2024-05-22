import { Card } from '@material-tailwind/react'
import { LineChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const WeeklyFinishedTasksChart = () => {
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <Card className='w-full rounded-md overflow-hidden' ref={chartCanvasRef}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
        series={[
          {
            data: [4, 8, 6, 2, 5, 1, 5],
            color: '#7E56DA'
          },
        ]}
        width={width}
        height={220}
      />
    </Card>
  )
}

export default WeeklyFinishedTasksChart