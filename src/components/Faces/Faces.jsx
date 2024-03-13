import React from 'react'
import styles from './Faces.module.css'
const Faces = () => {
  return (
    <div className={styles.container}>
        <div className={styles.DopContainer}>
        <h1>ЛИЦА ПОБЕДЫ</h1>
            <div className={styles.FlexContainer}>
                <div className={styles.FlexBigItem}>
                    <div className={styles.FlexItem1}>
                        <div className={styles.image1}></div>
                    </div>
                    <div className={styles.FlexItem2}>
                        <div className={styles.text}>
                            ЖОГА<br/>ВЛАДИМИР<br/>АРТЁМОВИЧ
                        </div>
                        <div className={styles.text}>
                            26.05.1993<br/>05.03.2022<br/>
                        </div>
                        <div>
                            <button className={styles.Podrobnee}>Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className={styles.FlexBigItem}>
                    <div className={styles.FlexItem1}>
                        <div className={styles.image2}></div>
                    </div>
                    <div className={styles.FlexItem2}>
                        <div className={styles.text}>
                            АРСЕН<br/>СЕРГЕЕВИЧ<br/>ПАВЛОВ
                        </div>
                        <div className={styles.text}>
                            08.02.1983<br/>08.02.2016<br/>
                        </div>
                        <div>
                            <button className={styles.Podrobnee}>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faces