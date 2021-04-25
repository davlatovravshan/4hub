import React, {useRef} from 'react'

import './navbar.scss'
import Search from './Search'
import Chart from './Chart'
import Notify from './Notify'
import DropdownProfile from './DropdownProfile'

const Navbar = ({ menuShow }) => {

    return (
        <div className={`top-nav ${!menuShow ? 'toggle' : ''}`}>
            <div className="top-nav__left">
                <Search/>
            </div>
            <div className="top-nav__right">

                <div className="top-nav__chart">
                    <Chart complete={0}/>
                </div>

                <div className="top-nav__notify">
                    <Notify/>
                </div>

                <div className="top-nav__profile">
                    <DropdownProfile/>
                </div>

            </div>
        </div>
    )
}

export default Navbar