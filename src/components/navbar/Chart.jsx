import React, {useState} from 'react'

import './navbar.scss'

const Chart = ({ complete = 0 }) => {

    const limit = 100;

    return (
        <div className="chart">
            <img className="chart__img" src="img/navbar/chart.svg" alt="Chart"/>
            <div className="chart__data">
                <div className="chart__progress progress">
                    <div className="progress__done" style={{width: `${complete}%`}}/>
                </div>
                <div className="chart__info">
                    <span>{complete}</span>&nbsp;ГБ из <span>{limit}</span>&nbsp;ГБ
                </div>
            </div>
        </div>
    )
}

export default Chart