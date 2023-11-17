import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Logo from '../Logo/Logo'
import { useFormAndValidation } from '../../hooks/useFormAndValidation'

export default function Login() {
  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();

  const { email, password } = values;

  useEffect(() => {
    if (!email && !password) {
      setIsValid(false)
    }
  }, [email, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    // onLogin();
  }

  return (
    <main>
      <section className='authorization'>
        <div className='authorization__logo'>
          <Logo />
        </div>
        <h1 className='authorization__title'>Рады видеть!</h1>
        <form className='authorization__form' onSubmit={handleSubmit}>
          <div className='authorization__input-container'>
            <label className='authorization__input-label'>Email</label>
            <input
              className='input authorization__input'
              type='email'
              name='email'
              required
              placeholder='Email'
              value={email || ''}
              onChange={handleChange}
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            />
            <span className='input-error input-error_active'>
              {errors.email}
            </span>
          </div>
          <div className='authorization__input-container'>
            <label className='authorization__input-label'>Пароль</label>
            <input
              className='input authorization__input'
              type='password'
              name='password'
              required
              placeholder='Пароль'
              minLength='3'
              maxLength='25'
              value={password || ''}
              onChange={handleChange}
            />
            <span className='input-error input-error_active'>
              {errors.password}
            </span>
          </div>
          <p className='authorization__forgot-text'><Link className='authorization__link'>Забыли пароль?</Link></p>
          <div className='authorization__buttons'>
            <button type='submit' className={!isValid ? 'authorization__button authorization__button_type_disabled' : 'authorization__button authorization__button_type_active'} disabled={!isValid}>Войти</button>
            <p className='authorization__text'>Еще не зарегистрированы? <Link className='authorization__link authorization__link_type_registration'>Регистрация</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}
