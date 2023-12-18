import React from 'react'
import Tooltip from '../../components/Tooltip'
import BarChart from '../../charts/BarChart02'
import { StackedChartData } from '../../data/charts'
function DashboardStackedCard() {
  return (
    <div className="h-full flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Sales VS Refunds (Stacked Chart)
        </h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit.
          </div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">
            +$6,796
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
            -34%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={StackedChartData} width={595} height={248} />
      </div>
    </div>
  )
}

export default DashboardStackedCard
