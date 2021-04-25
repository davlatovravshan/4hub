import React, {useState} from 'react'

import '../scss/cabinet.scss'
import Menu from '../components/menu/Menu'
import Navbar from '../components/navbar/Navbar'
import {
    ArchiveIcon, Calendar2Icon, CalendarIcon, ClockIcon,
    DeviceIcon,
    FileDownIcon,
    FileIcon,
    FileUpIcon,
    FolderIcon, MailIcon, PictureIcon,
    RocketIcon,
    SafeIcon, ShoppingCartIcon, SmsIcon, TrashIcon,
    UsersIcon, WebcamIcon
} from '../components/icons'
import UploadIcon from '../components/icons/UploadIcon'
import UserForm from '../components/form/UserForm'

const menuData = [
    {
        label: 'Мои папки',
        icon: <FolderIcon/>,
        url: '#'
    },
    {
        label: 'Мои файлы',
        icon: <FileIcon/>,
        url: '#'
    },
    {
        label: 'Программы',
        icon: <RocketIcon/>,
        url: '#'
    },
    {
        label: 'Сейф',
        icon: <SafeIcon/>,
        url: '#'
    },
    {
        label: 'Подключенные устройства',
        icon: <DeviceIcon/>,
        url: '#'
    },
    {
        label: 'Совместный проект',
        icon: <UsersIcon/>,
        url: '#'
    },
    {
        label: 'Расшаренные файлы',
        icon: <FileUpIcon/>,
        url: '#'
    },
    {
        label: 'Загруженные файлы',
        icon: <FileDownIcon/>,
        url: '#'
    },
    {
        label: 'Архив',
        icon: <ArchiveIcon/>,
        url: '#'
    },
    {
        label: 'Журнал',
        icon: <ClockIcon/>,
        url: '#'
    },
    {
        label: 'Корзина',
        icon: <TrashIcon/>,
        url: '#'
    },
]

const bottomPanelData = [
    {icon: <MailIcon/>, url: '#'},
    {icon: <CalendarIcon/>, url: '#'},
    {icon: <SmsIcon/>, url: '#'},
    {icon: <WebcamIcon/>, url: '#'},
    {icon: <Calendar2Icon/>, url: '#'},
    {icon: <PictureIcon/>, url: '#'},
    {icon: <ShoppingCartIcon/>, url: '#'},
]

const Cabinet = props => {

    const [show, setShow] = useState(true)
    const [bottomPanelShow, setBottomPanelShow] = useState(false)

    const toggleMenu = isShow => setShow(isShow)

    return (
        <div className='parent'>

            <Menu
                menuData={menuData}
                show={show}
                toggleMenu={toggleMenu}
            />

            <div className={`main ${!show ? 'toggle' : ''}`}>

                <Navbar menuShow={show}/>

                <div className="top-buttons">
                    <div className="wrapper">
                        <div className="top-buttons__list">
                            <button className="top-button main-btn">
                                Личные данные
                            </button>
                            <button className="top-button main-btn">
                                Служба поддержки
                            </button>
                            <button className="top-button main-btn">
                                Тарифный план
                            </button>
                            <button className="top-button main-btn">
                                Контакты
                            </button>
                            <button className="top-button main-btn">
                                Подключенные прораммы
                            </button>
                            <div className="top-buttons__right-side">
                                <button className="top-button right-button main-btn">
                                    Расказать друзьям
                                    <span className="btn-icon">
                                        <UploadIcon/>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">

                    <div className="content">
                        <UserForm/>
                    </div>

                </div>

                <div
                    className={
                        `bottom-panel 
                        ${bottomPanelShow ? 'active' : ''} 
                        ${!show ? 'toggle' : ''}`
                    }
                >
                    <div
                        onMouseLeave={() => setBottomPanelShow(false)}
                        className="bottom-panel__wrapper"
                    >
                        <div className='bottom-panel__action'>
                            <div
                                onMouseEnter={() => {
                                    setTimeout(() => setBottomPanelShow(true))
                                }}
                                className="bottom-panel__open"
                            >
                                <span className='bottom-panel__line'/>
                            </div>
                        </div>
                        <ul className="bottom-panel__list">
                            {bottomPanelData.map((item, index) => (
                                <li key={index}>
                                    <a className='bottom-panel__link' href={item.url}>
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cabinet