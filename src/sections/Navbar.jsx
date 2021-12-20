import React from 'react'
import styles from '../styles/styled-components/Navbar.module.scss'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import { slide as Menu } from 'react-burger-menu'
import '../styles/burger.scss'

const List = () => (
    <>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Product</a>
        <a href="#">Feature</a>
    </>
)

const Navbar = () => {
    return (
        <div className='container' >
            <div className={styles.navbar} >
                <div className={styles.logo} >
                    <a href="/"><img src={logo} alt="" /></a>
                </div>

                <div className={styles.menu} >
                    <div className={styles.links} >
                        <List/>
                    </div>
                    <Button>Contact</Button>
                    <div className={styles.burgerMenu} >
                        <Menu right>
                            <List/>
                            <Button>
                                Contact
                            </Button>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
