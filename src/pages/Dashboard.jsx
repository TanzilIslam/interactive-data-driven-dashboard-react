import WelcomeBanner from '../partials/dashboard/WelcomeBanner'
import DashboardBarCard from '../partials/dashboard/DashboardBarCard'
import DashboardRealTimeCard from '../partials/dashboard/DashboardRealTimeCard'
import DashboardDoughnutCard from '../partials/dashboard/DashboardDoughnutCard'
import DashboardLineCard from '../partials/dashboard/DashboardLineCard'
import DashboardStackedCard from '../partials/dashboard/DashboardStackedCard'

function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <DashboardLineCard />
        </div>
        <div className="col-span-12 md:col-span-6">
          <DashboardBarCard />
        </div>
        <div className=" col-span-12">
          <DashboardRealTimeCard />
        </div>
        <div className="col-span-12 md:col-span-6">
          <DashboardDoughnutCard />
        </div>
        <div className="col-span-12 md:col-span-6">
          <DashboardStackedCard />
        </div>
      </div>
    </>
  )
}

export default Dashboard
