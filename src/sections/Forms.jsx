import React from 'react'
import styles from '../styles/styled-components/Forms.module.scss'

const Forms = () => {
    return (
        <section className='container' >
            <div className={styles.forms} >
                <div className={styles.effect} />
                <div className={styles.form} >
                    <p>Get Notified About Project</p>
                    <h3>Subscribe Now</h3>
                    <div>
                        <input type="text" placeholder='Enter Your Text' />
                        <button>Submit</button>
                    </div>
                </div>
                <div className={styles.form} >
                    <p>Get Notified About Project</p>
                    <h3>Subscribe Now</h3>
                    <button>Start Now</button>
                </div>
            </div>
        </section>
    )
}

export default Forms
