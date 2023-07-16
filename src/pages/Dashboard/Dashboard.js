import React from 'react'
import StatsAreaGraps from '../../components/StatsAreaGraps/StatsAreaGraps'
import StatusCard from '../../components/cards/StatusCard/StatusCard'
import BiWeekBarChart from '../../components/cards/BiWeekBarChart/BiWeekBarChart'
import DailyBarChart from '../../components/cards/DailyBarChart/DailyBarChart'
import QuizeChart from '../../components/cards/QuizeChart/QuizeChart'
import TrainingCard from '../../components/cards/TrainingCard/TrainingCard'

import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <div className='dashboard-container'>
                <StatsAreaGraps />
                <BiWeekBarChart />
                <StatusCard />
                <TrainingCard />
                <QuizeChart />
                <DailyBarChart />
            </div>
        </div>
    )
}

export default Dashboard