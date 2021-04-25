import React from 'react'

import './navbar.scss'

const Search = props => {
    return (
        <div className="top-nav__search search">
            <img className='search__icon' src="img/navbar/search.svg" alt="Search"/>
            <input className='search__input' type="text" placeholder='Введите название файла/папки'/>
        </div>
    )
}

export default Search