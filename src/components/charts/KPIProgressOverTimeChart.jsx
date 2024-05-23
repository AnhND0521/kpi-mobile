import { Card } from '@material-tailwind/react'
import { LineChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const KPIProgressOverTimeChart = () => {
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
        xAxis={[{ data: [0, 1, 2, 3, 4, 5, 6], label: 'ngày' }]}
        yAxis={[{ label: '%' }]}
        series={[
          {
            data: [10, 14, 20, 23, 30, 33, 37],
            color: '#7E56DA'
          }
        ]}
        width={width}
        height={220}
      />
    </Card>
  )
}

export default KPIProgressOverTimeChart