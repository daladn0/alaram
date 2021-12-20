import React from 'react'
import styles from '../styles/styled-components/Navbar.module.scss'
import logo from '../assets/logo.png'
import Button from '../components/Button'

const Navbar = () => {
    return (
        <div className='container' >
            <div className={styles.navbar} >
                <div className={styles.logo} >
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                
                <div className={styles.menu} >
                    <div className={styles.links} >
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Product</a>
                        <a href="#">Feature</a>
                    </div>

                    <Button>Contact</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
