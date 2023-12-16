import { tailwindConfig } from '../utils/Utils'

export const LineChartData = {
  labels: [
    '12-01-2020',
    '01-01-2021',
    '02-01-2021',
    '03-01-2021',
    '04-01-2021',
    '05-01-2021',
    '06-01-2021',
    '07-01-2021',
    '08-01-2021',
    '09-01-2021',
    '10-01-2021',
    '11-01-2021',
    '12-01-2021',
    '01-01-2022',
    '02-01-2022',
    '03-01-2022',
    '04-01-2022',
    '05-01-2022',
    '06-01-2022',
    '07-01-2022',
    '08-01-2022',
    '09-01-2022',
    '10-01-2022',
    '11-01-2022',
    '12-01-2022',
    '01-01-2023',
  ],
  datasets: [
    // Indigo line
    {
      label: 'Current',
      data: [
        73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122,
        110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323,
      ],
      borderColor: tailwindConfig().theme.colors.indigo[500],
      fill: false,
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
    // Blue line
    {
      label: 'Previous',
      data: [
        184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124, 42,
        124, 88, 88, 215, 156, 88, 124, 64,
      ],
      borderColor: tailwindConfig().theme.colors.blue[400],
      fill: false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
      pointHoverBackgroundColor: tailwindConfig().theme.colors.blue[400],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
    // emerald line
    {
      label: 'Average',
      data: [
        122, 170, 192, 86, 102, 124, 115, 115, 56, 104, 0, 72, 208, 186, 223,
        188, 114, 162, 200, 150, 118, 118, 76, 122, 230, 268,
      ],
      borderColor: tailwindConfig().theme.colors.emerald[500],
      fill: false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.emerald[500],
      pointHoverBackgroundColor: tailwindConfig().theme.colors.emerald[500],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
}
export const BarChartData = {
  labels: [
    '12-01-2020',
    '01-01-2021',
    '02-01-2021',
    '03-01-2021',
    '04-01-2021',
    '05-01-2021',
  ],
  datasets: [
    // Indigo line
    {
      label: 'Current',
      data: [73, 64, 73, 69, 104, 104],
      backgroundColor: tailwindConfig().theme.colors.indigo[500],
      fill: true,
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
    // Blue line
    {
      label: 'Previous',
      data: [184, 86, 42, 150, 42, 180],
      backgroundColor: tailwindConfig().theme.colors.blue[400],
      fill: true,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
      pointHoverBackgroundColor: tailwindConfig().theme.colors.blue[400],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
}
export const RealtimeChartDataPoints = [
  57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87, 53.73,
  56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25, 65.91, 64.44,
  65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92, 50.95, 49.65, 48.09,
  49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42, 50.91, 58.52, 53.37, 57.58,
  59.09, 59.36, 58.71, 59.42, 55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94,
  55.82, 53.94, 52.65, 50.25,
]
export const DoughnutChartData = {
  labels: ['United States', 'Italy', 'Other'],
  datasets: [
    {
      label: 'Top Countries',
      data: [35, 30, 35],
      backgroundColor: [
        tailwindConfig().theme.colors.indigo[500],
        tailwindConfig().theme.colors.blue[400],
        tailwindConfig().theme.colors.indigo[800],
      ],
      hoverBackgroundColor: [
        tailwindConfig().theme.colors.indigo[600],
        tailwindConfig().theme.colors.blue[500],
        tailwindConfig().theme.colors.indigo[900],
      ],
      borderWidth: 0,
    },
  ],
}

export const StackedChartData = {
  labels: [
    '12-01-2020',
    '01-01-2021',
    '02-01-2021',
    '03-01-2021',
    '04-01-2021',
    '05-01-2021',
  ],
  datasets: [
    // Light blue bars
    {
      label: 'Stack 1',
      data: [6200, 9200, 6600, 8800, 5200, 9200],
      backgroundColor: tailwindConfig().theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Blue bars
    {
      label: 'Stack 2',
      data: [-4000, -2600, -5350, -4000, -7500, -2000],
      backgroundColor: tailwindConfig().theme.colors.indigo[200],
      hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
}
