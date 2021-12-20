import React from 'react'
import styles from '../styles/styled-components/Service.module.scss'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'

const Service = () => {
    return (
        <section className='container' >
            <div className={styles.service} >
                <div className={styles.heading} >
                    <p className='suptitle' >Our Service</p>
                    <h2 className='title' >Smart Light Bulbs offer these additional features</h2>
                </div>
                <div className={styles.content} >

                    <div className={styles.item}>
                        <div className={styles.icon} >
                            <img src={service1} alt="" />
                        </div>
                        <div className={styles.info} >
                            <h3>Two-way-communication</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon} >
                            <img src={service2} alt="" />
                        </div>
                        <div className={styles.info} >
                            <h3>Simple Installation</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon} >
                            <img src={service3} alt="" />
                        </div>
                        <div className={styles.info} >
                            <h3>Schedule timed events</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon} >
                            <img src={service4} alt="" />
                        </div>
                        <div className={styles.info} >
                            <h3>Alexa integration</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Service
