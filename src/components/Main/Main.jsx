import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate();

  return (
    <section className='main'>
      <h1 className="main__title">Вы успешно авторизировались!</h1>
      <button className="button main__button" onClick={() => navigate('/')}>Выйти</button>
    </section>
  )
}
