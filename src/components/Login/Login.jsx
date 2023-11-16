import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Logo from '../Logo/Logo'

export default function Login() {
  return (
    <main>
      <section className='authorization'>
        <div className='authorization__logo'>
          <Logo />
        </div>
        <h1 className='authorization__title'>Рады видеть!</h1>
        <form className='authorization__form'>
          <div className='authorization__input-container'>
            <label className='authorization__input-label'>Email</label>
            <input
              className='input authorization__input'
              type='email'
              name='email'
              required
              placeholder='Email'
            />
            <span className='input-error input-error_active'></span>
          </div>
          <div className='authorization__input-container'>
            <label className='authorization__input-label'>Пароль</label>
            <input
              className='input authorization__input'
              type='password'
              name='password'
              required
              placeholder='Пароль'
            />
            <span className='input-error input-error_active'></span>
          </div>
          <div className='authorization__buttons'>
            <button type='submit' className='authorization__button'>Войти</button>
            <p className='authorization__text'>Еще не зарегистрированы?
              <Link>Регистрация</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}
