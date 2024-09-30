import React from 'react'
import { Box, Typography } from '@mui/material'

import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const Dashboard = () => {
  return (
    <Box component='main' sx={{ boxShadow: 3, width: '100%' }}>
      <Box>
        <Typography variant='h4' component='h4'>
          Dashboard
        </Typography>

        <LineChart
          width={1300}
          height={600}
          series={[
            { data: pData, label: 'pv' },
            { data: uData, label: 'uv' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
      </Box>
    </Box>
  )
}

export default Dashboard