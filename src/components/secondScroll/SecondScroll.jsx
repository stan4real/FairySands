import React from 'react'
import styles from './SecondScroll.module.css'
const SecondScroll = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text1}>НАШИ ПАРТНЕРЫ:</h1>
            <div style={{position:'absolute'}}>
            <div className={styles.fon}>
                <div className = {styles.cyanvektor} style={{backgroundImage : `url('./cyanvektor.png')`}}></div>
                <div className = {styles.bogvektor} style={{backgroundImage : `url('./bogvektor.png')`}}></div>
                <div className = {styles.purplevektor} style={{backgroundImage : `url('./purplevektor.png')`}}></div>
                <div className = {styles.pinkvektor} style={{backgroundImage : `url('./pinkvektor.png')`}}></div>
                <div className = {styles.aquavektor} style={{backgroundImage : `url('./aquavektor.png')`}}></div>
            </div>
            </div>
            <div className={styles.ScrollContainer}>
                <div className={styles.flexContainer}>
                    <div className={styles.flexBigItem}>
                        <div className={styles.flexItem}>
                            <div className={styles.imagekisl} style={{backgroundImage : `url('./кислов.png')`}}></div>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.image} style={{backgroundImage : `url('./Алексей.png')`}}></div>
                        </div>
                    </div>
                    <div className={styles.flexBigItem}>
                        <div className={styles.flexItem}>
                            <div className={styles.imagepeski} style={{backgroundImage : `url('./пески.png')`}}></div>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.image} style={{backgroundImage : `url('./полиграфия.png')`}}></div>
                        </div>
                    </div>
                    <div className={styles.flexBigItem}>
                        <div className={styles.flexItem}>
                            <div className={styles.imageZV} style={{backgroundImage : `url('./ZV.png')`}}></div>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.image} style={{backgroundImage : `url('./бутик.png')`}}></div>
                        </div>
                    </div>
                </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexBigItem}>
                            <div className={styles.flexItem}>
                                <div className={styles.imageZV} style={{backgroundImage : `url('./ZV.png')`}}></div>
                            </div>
                            <div className={styles.flexItem}>
                                <div className={styles.image} style={{backgroundImage : `url('./бутик.png')`}}></div>
                            </div>
                        </div>
                        <div className={styles.flexBigItem}>
                            <div className={styles.flexItem}>
                                <div className={styles.imageZV} style={{backgroundImage : `url('./ZV.png')`}}></div>
                            </div>
                            <div className={styles.flexItem}>
                                <div className={styles.image} style={{backgroundImage : `url('./бутик.png')`}}></div>
                            </div>
                        </div>
                        <div className={styles.flexBigItem}>
                            <div className={styles.flexItem}>
                                <div className={styles.imagepeski} style={{backgroundImage : `url('./пески.png')`}}></div>
                            </div>
                            <div className={styles.flexItem}>
                                <div className={styles.image} style={{backgroundImage : `url('./полиграфия.png')`}}></div>
                            </div>
                        </div>
                    </div>
                    
                    
            </div>
        
    </div>
  )
}

export default SecondScroll