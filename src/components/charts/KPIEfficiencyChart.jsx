import { Card } from '@material-tailwind/react'
import { BarChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const KPIEfficiencyChart = () => {
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <div className='w-full rounded-md overflow-hidden' ref={chartCanvasRef}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['1/6', '2/6', '3/6', '4/6', '5/6', '6/6', '7/6'], label: 'Ngày' }]}
        yAxis={[{ label: 'Số nhiệm vụ hoàn thành' }]}
        series={[{ data: [2, 3, 1, 5, 3, 4, 1], color: '#7E56DA'}]}
        width={width}
        height={220}
      />
    </div>
  )
}

export default KPIEfficiencyChart