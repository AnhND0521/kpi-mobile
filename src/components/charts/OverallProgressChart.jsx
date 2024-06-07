import { Card } from '@material-tailwind/react'
import { LineChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const OverallProgressChart = () => {
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
        xAxis={[{ scaleType: 'point', data: ['4/5', '7/5', '10/5', '13/5', '16/5', '19/5', '22/5'], label: 'Ngày' }]}
        yAxis={[{ label: '%' }]}
        series={[
          {
            data: [14, 16, 20, 23, 30, 33, 37],
            color: 'skyblue',
            label: 'Giảng dạy'
          },
          {
            data: [28, 34, 40, 44, 57, 59, 63],
            color: '#1976d2',
            label: 'Nghiên cứu'
          },          
          {
            data: [6, 20, 24, 33, 42, 47, 50],
            color: '#FF6B6F',
            label: 'Phục vụ'
          },
        ]}
        width={width}
        height={220}
      />
    </Card>
  )
}

export default OverallProgressChart