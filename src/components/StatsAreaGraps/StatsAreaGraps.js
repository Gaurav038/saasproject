import React from 'react'
import AreaGraphCard from '../../components/cards/AreaGraph/AreaGraphCard'
import './StatsAreaGraps.css'

const StatsAreaGraps = () => {
    return (
        <div className='flex-align StatsAreaGraps StatsAreaGraps-main'>
            <div className='flex-align StatsAreaGraps'>
                <AreaGraphCard
                    countH1={'3,354'}
                    percentage={'20%'}
                    number={'234'}
                    heading='In Training Workers'
                    graph_color={'#018E42'}
                    bg={'rgba(1, 142, 66, 0.1)'}
                />
                <AreaGraphCard
                    countH1={'2,433'}
                    percentage={'20%'}
                    number={'435'}
                    heading='Video Watch-Time (Hrs)'
                    graph_color={'#ED1C24'}
                    bg={'rgba(237, 28, 36, 0.10)'}
                    id='fcghjbjk'
                />
            </div>
            <div className='flex-align StatsAreaGraps'>
                <AreaGraphCard
                    countH1={'95%'}
                    percentage={'20%'}
                    number={'24%'}
                    heading='% workers Passing Quiz'
                    graph_color={'#018E42'}
                    bg={'rgba(1, 142, 66, 0.1)'}
                />
                <AreaGraphCard
                    countH1={'3,354'}
                    percentage={'20%'}
                    number={'234'}
                    heading='Avg. Days Taken'
                    graph_color={'#018E42'}
                    bg={'rgba(1, 142, 66, 0.1)'}
                />
            </div>
        </div>
    )
}

export default StatsAreaGraps