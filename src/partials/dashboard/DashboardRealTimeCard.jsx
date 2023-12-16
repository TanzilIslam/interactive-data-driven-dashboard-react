import React, { useState, useEffect } from 'react'
import Tooltip from '../../components/Tooltip'
import RealtimeChart from '../../charts/RealtimeChart'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils'
import { RealtimeChartDataPoints } from '../../data/charts'

function DashboardRealTimeCard() {
  // Fake real-time data
  const [counter, setCounter] = useState(0)
  const [increment, setIncrement] = useState(0)
  const [range, setRange] = useState(35)

  const [slicedData, setSlicedData] = useState(
    RealtimeChartDataPoints.slice(0, range)
  )

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date()
    const dates = []
    RealtimeChartDataPoints.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000))
    })
    return dates
  }

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  )

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [counter])

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1)
    if (increment + range < RealtimeChartDataPoints.length) {
      setSlicedData(([x, ...slicedData]) => [
        ...slicedData,
        RealtimeChartDataPoints[increment + range],
      ])
    } else {
      setIncrement(0)
      setRange(0)
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()])
    return () => setIncrement(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  const chartData = {
    labels: slicedLabels,
    datasets: [
      // Indigo line
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Real Time Value (Line Chart)
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <RealtimeChart data={chartData} width={595} height={248} />
    </div>
  )
}

export default DashboardRealTimeCard
