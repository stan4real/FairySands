import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'

const ErrorElement = () => {
  return (
        <div className={styles.errorElements}>
            <h1>Такой страницы не существует. Ошибка 404</h1>
            <Link to='/'>
                <button>Вернуться</button>
            </Link>
        </div>
  )
}

export default ErrorElement