import React from 'react'
import styles from '../header/Header.module.css'
import logo from '../header/logo.jpg'
import {BsWhatsapp} from 'react-icons/bs'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <div>
            <img src={logo}/>
        </div>
        <div>
            <nav >
                <ul>
                    <li>
                        <Link to ='/'>
                            <button className={styles.b1}>
                                Главная
                            </button>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to ='/events'>
                            <button>
                                Мероприятия
                            </button>
                        </Link>
                    </li>
                    <li>
                        <button>
                            О нас
                        </button>
                    </li>
                    <li>
                        <button>
                            Контакты
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div className={styles.icons}>
            <div>
                <div className={styles.spn1}>
                    <BsWhatsapp className={styles.bswhatsapp}/>
                </div>
            </div>
            <div>
                <div className={styles.spn2}>
                    <div className={styles.faphone}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header