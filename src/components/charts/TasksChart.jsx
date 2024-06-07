import { Card, Typography } from '@material-tailwind/react'
import { PieChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const TasksChart = (props) => {
  const { finished, ongoing, overdue, total } = props;
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <Card className='w-full pb-4 rounded-md overflow-hidden' ref={chartCanvasRef}>
      <PieChart
        margin={{
          left: width/4,
          top: -12,
          bottom: 12
        }}
        colors={["#B189FF", "#B6DFFF", "#FF6B6F"]}
        series={[
          { 
            data: [
              { id: 0, value: finished, label: `Đã hoàn thành\n(${finished})` },
              { id: 1, value: ongoing, label: `Cần làm\n(${ongoing})` },
              { id: 2, value: overdue, label: `Quá hạn\n(${overdue})` },
            ],
            outerRadius: width/4
          },
        ]}
        width={width}
        height={276}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
          },
        }}
      />
      <div className='flex flex-col items-center'>
        <Typography className='font-inter text-xl font-bold'>
          {total}
        </Typography>
        <Typography className='font-inter text-lg font-regular'>
          công việc
        </Typography>
      </div>
    </Card>
  )
}

export default TasksChart