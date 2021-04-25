import React, {useState} from 'react'

import './navbar.scss'
import Dropdown from '../dropdown/Dropdown'
import {ArchiveIcon, FolderIcon, UsersIcon} from '../icons'

const dropdownData = [
    {
        label: 'Профиль',
        icon: <UsersIcon/>,
        url: '#'
    },
    {
        label: 'Настройки',
        icon: <FolderIcon/>,
        url: '#'
    },
    {
        label: 'Выйти',
        icon: <ArchiveIcon/>,
        url: '#'
    },
]

const DropdownProfile = props => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = prop => setDropdownOpen(prop)

    return (
        <div className="profile dropdown-selector profile-dropdown">

            <div
                className="profile__data"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <div className="profile__info">
                    <img className="profile__avatar" src="img/navbar/avatar.svg" alt="Avatar"/>
                    <p className='profile__name'>Евгений</p>
                </div>
                <img
                    className="profile__arrow"
                    src="img/navbar/profile-arrow.svg" alt="Profile arrow"
                />
            </div>

            <Dropdown
                open={dropdownOpen}
                data={dropdownData}
                parentSelector='profile-dropdown'
                toggleDropdown={toggleDropdown}
                title='Пользователь'
            />

        </div>
    )
}

export default DropdownProfile