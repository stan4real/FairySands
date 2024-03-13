import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.flexContainer}>
            <div className={styles.flexBigItem1}>
                    
                <div className={styles.flexItem1}>
                    <div>
                        Политика конфиденциальности
                    </div>
                    <div>
                        Все права защищены
                    </div>
                    <div>
                    © НКО "Сказочные пески"
                    </div>
                    <div className={styles.imgbl}>
                        <div className = {styles.image} style={{backgroundImage : `url('./footerpeski.png')`}}></div>
                    </div>
                </div>
                
            </div>
            <div className={styles.flexBigItem}>
                <div className={styles.flexItem}>
                    <div>
                        Главная
                    </div>
                    <div>
                        О нас
                    </div>
                    <div>
                        Мероприятия
                    </div>
                </div>
            </div>
            <div className={styles.flexBigItem}>
                <div className={styles.flexItem}>
                    <div className={styles.docs}>
                        Документы 
                    </div>
                    <div>
                        Ул.50 лет ВЛКСМ<br/>
                        5a "ТЦ Новый рим"
                    </div>
                </div>
            </div>
            <div className={styles.flexBigItem}>
                <div className={styles.flexItem3}>
                    <div>
                        Ул. Тухачевского 3/2<br/>
                        помещения 1-2
                    </div>
                </div>
            </div>
            <div className={styles.flexBigItem}>
                <div className={styles.flexItem}>
                    <div className={styles.vkbutt}>
                    <button className={styles.b1}>Вконтакте <div className={styles.vk}/>
                    </button>
                    </div>
                    <button className={styles.b1}>+7 919 745-95-40</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer