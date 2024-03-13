import React, { useState } from 'react'
import styles from './Slider.module.css'
import { Link } from 'react-router-dom'

const Slider = () => {
    
    const slides=[
        {url:'/sliderimg1.png', title:'Pobeda'},
        {url:'https://travelbelka.ru/wp-content/uploads/2019/01/fsb.png', title:'travelbelka'},
        {url:'https://tvmag.ru/upload/iblock/a30/pobeda.jpg', title:'tvmag'}
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const [select, setSelect] = useState(0)

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
        setSelect(slideIndex)
    }
  return (
    
        <div className={styles.containerstyles}>
            <div className={styles.sliderStyle}>
                    <div>
                        <h1 className={styles.text1}>
                                НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ<br/>
                                "СКАЗОЧНЫЕ ПЕСКИ"
                            </h1>
                            <Link to ='/Events'>
                            <div className={styles.text2}>
                                Рекодсмен книги рекордов России<br/>
                                Самая большая картина из песка
                            </div>
                            </Link>
                        <div className={styles.dotsContainer}>
                            {slides.map((slide, slideIndex) =>
                            <div 
                            key={slideIndex} 
                            className={styles.dotsStyle}
                            
                            onClick={() => goToSlide(slideIndex)}
                            style={{color: select === slideIndex ? "#EA068A" : "#fff"}} 
                            >
                            &#11044;</div>  )}
                        </div>
                    </div>
                <div className={styles.slideStyle} style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
            </div>
        </div>
    
  )
}

export default Slider