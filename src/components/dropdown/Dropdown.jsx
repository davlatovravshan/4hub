import React, {useEffect} from 'react'

import './dropdown.scss'

const Dropdown = (
    {
        data = [],
        title = 'Dropdown title',
        toggleDropdown = () => {},
        selector,
        ...props
    }
) => {

    const handleClickOutside = (event) => {
        if (!event.target.closest(`.${props.parentSelector}`)) {
            toggleDropdown(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [])

    const active = props.open ? 'active' : ''

    return (
        <div className={`dropdown ${active}`}>
            <div className="dropdown__header">
                <h4 className='dropdown__title'>{title}</h4>
            </div>
            <ul className="dropdown__list">
                {data.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="dropdown__link">
                            {/*{item.icon ? <span className='dropdown__icon'>{item.icon}</span> : null}*/}
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown