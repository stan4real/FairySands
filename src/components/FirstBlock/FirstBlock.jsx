import React from 'react'
import styles from './FirstBlock.module.css'

const FirstBlock = () => {
return (
    <div className={styles.container}>
        <div className={styles.DopContainer}>
        <h1 className={styles.HeadText}>
            Объединяющая патриотическая акция<br/>
            "Кисловодск. Лица Победы"
        </h1>
        <div className={styles.TextArea}>
            <div className ={styles.Data}>
                <div className ={styles.dataRow}>
                    <div className={styles.MiniImage}></div>
                    <h3>Г. КИСЛОВОДСК</h3>
                </div>
                <div className ={styles.dataRow}>
                    <div className={styles.MiniImage} style={{backgroundImage: `url('/calendar.png')`}}></div>
                        <h3>
                            3-9 МАЯ <span>. .</span> 2023г
                        </h3>
                    </div>
                </div>
                <div className ={styles.dataRow}>
                <div className={styles.MiniImage} style={{backgroundImage: `url('/views.png')`}}>
                </div>
                <h3>323</h3>
            </div>
        </div>
        <div className={styles.ImageEvent}>
        </div>
        <div className={styles.TextArea2}>
            <div className={styles.Paragraph}>
                <div className={styles.MiniImage2}></div>
                <p>C <b>3 по 9 мая</b> мы проводили социальную акцию «Лица Победы», 
                где рисовали портреты героев Великой Отечественной войны  и специальной  
                военной операции песком. <br/>
                Также, все желающие, независимо от возраста, могли  поучаствовать 
                в акции и нарисовать любую картину из цветного песка. </p>
            </div>
            <div className={styles.Paragraph}>
                <div className={styles.MiniImage2}></div>
                <p>Участие приняли специальные гости: <b>Денис Майданов</b> (Российский <br/>
                политический и общественный деятель, певец, автор-исполнитель песен, <br/>
                композитор, поэт, актёр, музыкальный продюсер) и <b>Ольга Казакова</b> <br/>
                (Российский государственный и политический деятель, председатель <br/>
                комитета Государственной Думы по просвещению).</p>
            </div>
            <div className={styles.Paragraph}>
                <div className={styles.MiniImage2}></div>
                <p>Был установлен и зарегестрирован <b>рекорд России:</b> самая большая картина 
                из песка. На макете, разработанным нами, был представлен коллаж с видом 
                Нарзанной галереи г. Кисловодск со времен ВОВ и в настоящее время. <br/>
                Размеры картины: 598см х 275см. Принять участие могли все желающие.</p>
            </div>
        </div>
        </div>
    </div>
)
}

export default FirstBlock