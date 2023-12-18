import React from 'react'
import BarChart from '../../charts/BarChart01'
import { BarChartData } from '../../data/charts'

function DashboardBarCard() {
  return (
    <div className="h-full flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Direct VS Indirect (Bar Chart)
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={BarChartData} width={595} height={248} />
    </div>
  )
}

export default DashboardBarCard
