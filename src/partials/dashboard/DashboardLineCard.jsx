import React from 'react'
import LineChart from '../../charts/LineChart'
import { LineChartData } from '../../data/charts'

function DashboardLineCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Sales Over Time (Line Chart)
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={LineChartData} width={595} height={248} />
    </div>
  )
}

export default DashboardLineCard
