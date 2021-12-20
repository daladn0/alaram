import React from 'react'
import styles from '../styles/styled-components/Banner.module.scss'
import bannerImage from '../assets/banner.png'
import lamp from '../assets/lamp.png'
import temperature from '../assets/temperature.png'
import Button from '../components/Button'

const Banner = () => {
    return (
        <section className='container' >
            <div className={styles.banner} >
                <div className={styles.effect} />
                <div className={styles.content} >
                    <h1 className='title' >Manage your Smart Home</h1>
                    <p className={styles.text} >The application allows you to remotely manage modern apartment.</p>
                    <Button>Shop Now</Button>
                    <div className={styles.info} >
                        <div className={styles.item} >
                            <h3><span>23</span>&deg;c</h3>
                            <p>Temperature</p>
                        </div>
                        <div className={styles.item} >
                            <h3><span>36%</span></h3>
                            <p>Humidity</p>
                        </div>
                    </div>
                </div>
                <div className={styles.image} >
                    <div className={styles.images} >
                        <div className={styles.bigImage} >
                            <img src={bannerImage} alt="" />
                        </div>
                        <div className={styles.lamp} >
                            <img src={lamp} alt="" />
                        </div>
                        <div className={styles.temperature} >
                            <img src={temperature} alt="" />
                        </div>
                    </div>
                    <h3>Your Items</h3>
                    <p>All your devices added for edit</p>
                </div>
            </div>
        </section>
    )
}

export default Banner
