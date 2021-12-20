import React from 'react'
import Button from '../components/Button'
import styles from '../styles/styled-components/About.module.scss'
import about from '../assets/about.png'

const About = () => {
    return (
        <section className={styles.container}  >
            <div className='container' >
                <div className={styles.about} >
                    <p className='suptitle' >About Us</p>
                    <h2 className='title' >We Are Here To Make Your Home Look More Elegant And Stylish!</h2>
                    <p className={styles.text} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
            <img src={about} alt="" />
        </section>
    )
}

export default About
