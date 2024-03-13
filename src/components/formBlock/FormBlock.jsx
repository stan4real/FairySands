import React from 'react'
import styles from './FormBlock.module.css'

const FormBlock = () => {
  return (
    <div className={styles.container}>
        <div className={styles.flexContainer}>
            <div className={styles.flexItem1}>
                <h1 className={styles.text1}>Сказочные пески<br/>
                В вашем городе</h1>
                <div className={styles.text2}>
                    Мы проводим акции с нашими <br/>
                    картинами из сказочного песка <br/>
                    в разных городах России
                </div>
                <div className={styles.text2}>
                    Хотите увидеть нас в своём городе?<br/>
                    Свяжитесь с нами
                </div>
                <div className = {styles.arrowblue} style={{backgroundImage : `url('./arrowblue.png')`}}></div>
            </div>
            
                <div className={styles.flexItem2}>
                    <form className={styles.item1}>
                        <input type='text' placeholder='Имя' ></input>
                        <input name="tel" placeholder="+7 (---) --- -- --" id="tel" ></input>
                        <div className={styles.selectWrapper}>
                            <select name="select" placeholder='Город'>
                                <option value="value1">Город</option>
                                <option value="value2" >Зачение 2</option>
                            </select>
                        </div>
                        <button className={styles.b1}>Отправить</button>
                    </form>
                <div className={styles.flexItemBack}></div>
                </div>
                
            
        </div>
    </div>
  )
}

export default FormBlock