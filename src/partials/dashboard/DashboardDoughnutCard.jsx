import React from 'react'
import DoughnutChart from '../../charts/DoughnutChart'
import { DoughnutChartData } from '../../data/charts'

function DashboardDoughnutCard() {
  return (
    <div className="h-full flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Top Countries(Doughnut Chart)
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={DoughnutChartData} width={389} height={260} />
    </div>
  )
}

export default DashboardDoughnutCard
