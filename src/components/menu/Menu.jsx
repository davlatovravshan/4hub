import React, {useState} from 'react'

import './menu.scss'

const Menu = ({ show, toggleMenu, menuData }) => {

    return (
        <div className={`menu ${!show ? 'active' : ''}`}>

            <div className="menu-wrapper">

                <div className="menu-header">
                    {
                        show ?
                            <div className="menu-header__logo">
                                <img src="img/logo.png" alt="Logotype"/>
                            </div> :
                            <div className="menu-header__logo menu-header__logo-sm">
                                <img src="img/logo-sm.svg" alt="Logotype"/>
                            </div>
                    }
                </div>

                <div className="menu-content">

                    {
                        show ?
                        <div className="menu-content__header">
                            <h4 className="menu-content__title">Меню</h4>
                            <button
                                onClick={() => toggleMenu(false)}
                                className='menu-arrow-btn menu-content__arrow'
                            >
                                <img src="img/menu/open-arrow.png" alt="Open arrow"/>
                            </button>
                        </div>  :
                        <div className="menu-content__header menu-content__header-sm">
                            <button
                                onClick={() => toggleMenu(true)}
                                className='menu-arrow-btn menu-arrow-btn-sm'
                            >
                                <img src="img/menu/open-arrow.png" alt="Close arrow"/>
                            </button>
                        </div>
                    }

                    <ul className="menu-content__list">
                        {menuData.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} className="menu-content__link">
                                    <div className='menu-content__icon'>
                                        {item.icon}
                                    </div>
                                    <p className='menu-content__label'>{item.label}</p>
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Menu