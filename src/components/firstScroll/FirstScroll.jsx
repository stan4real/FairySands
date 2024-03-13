import React from 'react'
import styles from './FirstScroll.module.css'
const FirstScroll = () => {

    const items = [
        {}
    ]

  return (
    <div className={styles.container}>

        <div className={styles.text1}>НАШИ МЕРОПРИЯТИЯ</div>
        <div className={styles.ScrollContainer}>
            <div className={styles.item} style={{borderColor: '#2CACE2'}}>
                <div className={styles.textContainer}>
                    <h2>ОБЪЕДИНЯЮЩАЯ<br/>
                    ПАТРИОТИЧЕСКАЯ АКЦИЯ<br/>
                    "КИСЛОВОДСК. ЛИЦА ПОБЕДЫ"</h2>
                    <div className={styles.textarea2}>
                    <h3>Г. КИСЛОВОДСК <span>. . . . . .</span> 3 - 9 МАЯ <span>. . . .</span> 2023 </h3>    
                    <div className = {styles.arrow} style={{backgroundImage : `url('./smallarrowblue.png')`}}>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.item}>
            <div className={styles.textContainer}>
                    <h2>ОБЪЕДИНЯЮЩАЯ<br/>
                    ПАТРИОТИЧЕСКАЯ АКЦИЯ<br/>
                    "КИСЛОВОДСК. ЛИЦА ПОБЕДЫ"</h2>
                    <div className={styles.textarea2}>
                    <h3>Г. КИСЛОВОДСК <span>. . . . . .</span> 3 - 9 МАЯ <span>. . . .</span> 2023 </h3>    
                    <div className = {styles.arrow} style={{backgroundImage : `url('./smallarrow.png')`}}>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.item} style={{borderColor: '#2CACE2'}}>
            <div className={styles.textContainer}>
                    <h2>ОБЪЕДИНЯЮЩАЯ<br/>
                    ПАТРИОТИЧЕСКАЯ АКЦИЯ<br/>
                    "КИСЛОВОДСК. ЛИЦА ПОБЕДЫ"</h2>
                    <div className={styles.textarea2}>
                    <h3>Г. КИСЛОВОДСК <span>. . . . . .</span> 3 - 9 МАЯ <span>. . . .</span> 2023 </h3>    
                    <div className = {styles.arrow} style={{backgroundImage : `url('./smallarrowblue.png')`}}>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
            <div className={styles.textContainer}>
                    <h2>ОБЪЕДИНЯЮЩАЯ<br/>
                    ПАТРИОТИЧЕСКАЯ АКЦИЯ<br/>
                    "КИСЛОВОДСК. ЛИЦА ПОБЕДЫ"</h2>
                    <div className={styles.textarea2}>
                            <div >
                                <h3>Г. КИСЛОВОДСК <span>. . . . . .</span> 3 - 9 МАЯ <span>. . . .</span> 2023 </h3>
                                    
                            </div>
                        <div className = {styles.arrow} style={{backgroundImage : `url('./smallarrow.png')`}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className={styles.b1}>Все мероприятия</button>
    </div>
  )
}

export default FirstScroll