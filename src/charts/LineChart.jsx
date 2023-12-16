import React, { useRef, useEffect, useState } from 'react'
import { useThemeProvider } from '../utils/ThemeContext'
import { chartColors } from './ChartjsConfig'
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
} from 'chart.js'
import 'chartjs-adapter-moment'

// Import utilities
import { tailwindConfig, formatValue } from '../utils/Utils'

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
)

const legendItemStyle = {
  display: 'block',
  width: tailwindConfig().theme.width[3],
  height: tailwindConfig().theme.height[3],
  borderRadius: tailwindConfig().theme.borderRadius.full,
  marginRight: tailwindConfig().theme.margin[2],
  borderWidth: '3px',
  pointerEvents: 'none',
}

const labelStyle = {
  fontSize: tailwindConfig().theme.fontSize.sm[0],
  lineHeight: tailwindConfig().theme.fontSize.sm[1].lineHeight,
}

const LineChart = ({ data, width, height }) => {
  const [chart, setChart] = useState(null)
  const canvas = useRef(null)
  const legend = useRef(null)
  const { currentTheme } = useThemeProvider()
  const darkMode = currentTheme === 'dark'
  const {
    textColor,
    gridColor,
    tooltipBodyColor,
    tooltipBgColor,
    tooltipBorderColor,
  } = chartColors

  useEffect(() => {
    const ctx = canvas.current
    const newChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value),
              color: textColor[darkMode ? 'dark' : 'light'],
            },
            grid: {
              color: gridColor[darkMode ? 'dark' : 'light'],
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'MM-DD-YYYY',
              unit: 'month',
              displayFormats: {
                month: 'MMM YY',
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
              color: textColor[darkMode ? 'dark' : 'light'],
            },
          },
        },
        plugins: [
          {
            id: 'htmlLegend',
            afterUpdate(c) {
              const ul = legend.current
              if (!ul) return
              // Remove old legend items
              while (ul.firstChild) {
                ul.firstChild.remove()
              }
              // Reuse the built-in legendItems generator
              const items = c.options.plugins.legend.labels.generateLabels(c)
              items.slice(0, 2).forEach((item) => {
                const li = document.createElement('li')
                li.style.marginLeft = tailwindConfig().theme.margin[3]
                // Button element
                const button = document.createElement('button')
                button.style.display = 'inline-flex'
                button.style.alignItems = 'center'
                button.style.opacity = item.hidden ? '.3' : ''
                button.onclick = () => {
                  c.setDatasetVisibility(
                    item.datasetIndex,
                    !c.isDatasetVisible(item.datasetIndex)
                  )
                  c.update()
                }
                // Color box
                const box = document.createElement('span')
                box.style.display = 'block'
                box.style.width = tailwindConfig().theme.width[3]
                box.style.height = tailwindConfig().theme.height[3]
                box.style.borderRadius =
                  tailwindConfig().theme.borderRadius.full
                box.style.marginRight = tailwindConfig().theme.margin[2]
                box.style.borderWidth = '3px'
                box.style.borderColor =
                  c.data.datasets[item.datasetIndex].borderColor
                box.style.pointerEvents = 'none'
                // Label
                const label = document.createElement('span')
                label.classList.add('text-slate-500', 'dark:text-slate-400')
                label.style.fontSize = tailwindConfig().theme.fontSize.sm[0]
                label.style.lineHeight =
                  tailwindConfig().theme.fontSize.sm[1].lineHeight
                const labelText = document.createTextNode(item.text)
                label.appendChild(labelText)
                li.appendChild(button)
                button.appendChild(box)
                button.appendChild(label)
                ul.appendChild(li)
              })
            },
          },
        ],
      },
    })
    setChart(() => newChart)
    return () => newChart.destroy()
  }, []) // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    if (!chart) return

    const commonStyles = {
      'scales.x.ticks.color': textColor[darkMode ? 'dark' : 'light'],
      'scales.y.ticks.color': textColor[darkMode ? 'dark' : 'light'],
      'scales.y.grid.color': gridColor[darkMode ? 'dark' : 'light'],
      'plugins.tooltip.bodyColor':
        tooltipBodyColor[darkMode ? 'dark' : 'light'],
      'plugins.tooltip.backgroundColor':
        tooltipBgColor[darkMode ? 'dark' : 'light'],
      'plugins.tooltip.borderColor':
        tooltipBorderColor[darkMode ? 'dark' : 'light'],
    }

    chart.options = {
      ...chart.options,
      ...commonStyles,
    }
    chart.update('none')
  }, [chart, currentTheme])

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <div className="flex flex-wrap justify-between items-end">
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">
              $1,482
            </div>
            <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
              -22%
            </div>
          </div>
          <div className="grow ml-2 mb-1">
            <ul ref={legend} className="flex flex-wrap justify-end"></ul>
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  )
}

export default LineChart