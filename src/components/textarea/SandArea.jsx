import React from 'react'
import styles from './SandArea.module.css'
const SandArea = () => {
  return (
    <div className={styles.container}>
        <div className={styles.toprow}>
            <div className={styles.text1}>ОСНОВНЫМ ИНСТРУМЕНТОМ<br/>
            НАШЕЙ ДЕЯТЕЛЬНОСТИ<br/>
            ЯВЛЯЮТСЯ КАРТИНЫ ИЗ ПЕСКА
            </div>
            <div className={styles.vektor1} style={{backgroundImage: `url('./arrow.png')`}}></div>
            
        </div>
        <div className={styles.bottomrow}>
            <div className={styles.firstContainer}>
                <div className={styles.image}  ></div>
                <div className={styles.greenvektor} style={{backgroundImage: `url('./greenvektor.png')`}}  ></div>
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.contp}>
                    <p>В такой творческой деятельности
                    каждый найдёт что-то интресное!<br/>
                    Вне зависимости от возраста, сферы
                    деятельности, интересов<br/>
                    и взглядов на жизнь.</p>
                </div>
                <div className={styles.card}>
                    <div >
                        <p className={styles.text2}>
                            <span >КАРТИНА ИЗ ПЕСКА -</span><br/>
                            это идеальный способ<br/>
                            объединить между собой<br/>
                            абсолютно разных людей<br/>
                            через творчество
                        </p>
                    </div>
                </div>
                <button className={styles.b1}>О нас</button>
                <div className={styles.bluevektor} style={{backgroundImage: `url('./bluevektor.png')`}} ></div>
            </div>
            <div className={styles.thirdContainer}>
            </div>
        </div>
                

    </div>
  )
}

export default SandArea