import React from 'react'

import '../../scss/form.scss'
import Input from '../input/Input'

const UserForm = props => {
    return (
        <div className="user-form">

            <div className="user-form__upload">
                <input className='file-input' id='user-photo' type="file"/>
                <label htmlFor="user-photo">
                    <div className="user-photo__bg">
                        <img className='user-photo__avatar' src="img/navbar/avatar.svg" alt="Avatar"/>
                        <img className='user-photo__photo' src="img/camera.svg" alt="Photo"/>
                    </div>
                </label>
            </div>

            <div className="user-form__fields">

                <div className="user-form__row">
                    <div className="user-form__field flex-50">
                        <Input
                            label='Имя'
                        />
                    </div>
                    <div className="user-form__field flex-50">
                        <Input
                            label='Фамилия'
                        />
                    </div>
                </div>

                <div className="user-form__row">
                    <div className="user-form__field flex-100">
                        <Input
                            type='email'
                            label='Email'
                        />
                    </div>
                </div>

                <div className="user-form__row">
                    <div className="user-form__field flex-100">
                        <Input
                            type='password'
                            label='Пароль'
                        />
                        <div className="user-form__action">
                            <button className="user-form__button">
                                Сменить пароль
                            </button>
                        </div>
                    </div>
                </div>

                <div className="user-form__row">
                    <div className="user-form__field flex-100">
                        <Input
                            type='text'
                            label='Телефон'
                        />
                        <div className="user-form__action">
                            <button className="user-form__button">
                                Сменить телефон
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserForm