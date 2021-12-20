import React, {useEffect} from 'react'
import styles from '../styles/styled-components/Offer.module.scss'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import arrow from '../assets/arrow.svg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Offer = () => {
    const responsive = {
        0: { items: 4 },
    };

    useEffect(() => {

        document.querySelectorAll('[data-area]').forEach(element => {
            element.remove()
        });

        const img = document.createElement('img')
        img.src = arrow
        
        const img2 = document.createElement('img')
        img2.src = arrow

        document.querySelector('.alice-carousel__prev-btn-item').append(img)
        document.querySelector('.alice-carousel__next-btn-item').append(img2)

    }, [])

    const items = [
        <div className={styles.card} >
            <img src={card1} alt="" />
            <div className={styles.info} >
                <h3>Flood Light</h3>
                <p className={styles.text} >Floodlight Security Camera WiFi, Motion Detection, Live View, Siren Alarm, Starlight Color Night Vision</p>
                <p className={styles.price} >Price $79</p>
                <button className={styles.button} >Shop now</button>
            </div>
        </div>,
        <div className={styles.card} >
            <img src={card2} alt="" />
            <div className={styles.info} >
                <h3>Outdoor Security Light</h3>
                <p className={styles.text} >Remotely live stream or record HD video and take pictures from you smartphone or tablet</p>
                <p className={styles.price} >Price $129</p>
                <button className={styles.button} >Shop now</button>
            </div>
        </div>,
        <div className={styles.card} >
            <img src={card3} alt="" />
            <div className={styles.info} >
                <h3>Solar Pathlight</h3>
                <p className={styles.text} >Solar-powered Pathlight that shines up to 80 lumens of white light on walkways when motion is detected.</p>
                <p className={styles.price} >Price $39</p>
                <button className={styles.button} >Shop now</button>
            </div>
        </div>,
        <div className={styles.card} >
            <img src={card4} alt="" />
            <div className={styles.info} >
                <h3>Spotlight Battery</h3>
                <p className={styles.text} >Battery-powered Spotlight that shines light on garages, sheds when motion is detected.</p>
                <p className={styles.price} >Price $39</p>
                <button className={styles.button} >Shop now</button>
            </div>
        </div>
    ]

    return (
        <section className={styles.offer} >
            <div className='container' >
                <div className={styles.offerInner} >
                    <div className={styles.heading} >
                        <h2 className='title' >What we offer</h2>
                        <p>We Bridge is the hub of your Smart Lighting. It enables smart security features.</p>
                    </div>
                    <div className={styles.content} id='carousel' >
                        <AliceCarousel
                            responsive={responsive}
                            mouseTracking
                            items={items}
                            infinite
                            disableDotsControls
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer
