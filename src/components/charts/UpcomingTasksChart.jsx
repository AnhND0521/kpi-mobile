import { Card } from '@material-tailwind/react';
import { BarChart } from '@mui/x-charts';
import React, { useEffect, useRef, useState } from 'react'

const UpcomingTasksChart = (props) => {
  const { upcomingTasksData } = props;
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <Card className='w-full pb-4 rounded-md overflow-hidden' ref={chartCanvasRef}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }]}
        series={[{ data: upcomingTasksData, color: '#7E56DA'}]}
        width={width}
        height={300}
      />
    </Card>
  )
}

export default UpcomingTasksChart