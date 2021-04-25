import React, {useState} from 'react'
import Dropdown from '../dropdown/Dropdown'

import './navbar.scss'
import {ArchiveIcon, FolderIcon, UsersIcon} from '../icons'

const dropdownData = [
    {
        label: 'Уведомление 1',
        icon: <UsersIcon/>,
        url: '#'
    },
    {
        label: 'Уведомление 2',
        icon: <FolderIcon/>,
        url: '#'
    },
    {
        label: 'Уведомление 3',
        icon: <ArchiveIcon/>,
        url: '#'
    },
]

const Notify = (
    {
        complete = 0,
        badge = 2
    }
) => {

    const limit = 100;

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = prop => setDropdownOpen(prop)

    return (
        <div className="notify dropdown-selector notify-dropdown">

            <div className="notify__icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src="img/navbar/notify.svg" alt="" className="notify__img"/>
                <span className='notify__badge'>{badge}</span>
            </div>

            <Dropdown
                open={dropdownOpen}
                data={dropdownData}
                parentSelector='notify-dropdown'
                toggleDropdown={toggleDropdown}
                title='Уведомления'
            />

        </div>
    )
}

export default Notify