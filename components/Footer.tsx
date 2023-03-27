import React from 'react'
import styles from '../styles/Home.module.css'
import Caption from './Caption'
import Contact from './Contact'
import Email from './Email'
import Form from './Form'
import Office from './Office'
import Socal from './Socal'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <div id="footer" className={styles.footerbgimg}>
                <div className='p-5 lg:pl-20 lg:pr-20'>
                    <div className="flex flex-col lg:flex-row ">
                        <div className="caption pt-10 pl-5 lg:pl-14 lg:w-1/3">
                            <Caption />
                        </div>
                        <div className="email pt-10 lg:w-1/3">
                            <Email />
                        </div>
                        <div className="form pt-5 lg:w-1/3">
                            <Form />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row md:pt-5 lg:pt-5 lg:pb-5">
                        <div className="social lg:w-1/3 pt-0 lg:pt-5">
                            <Socal />
                        </div>
                        <div className="office lg:w-1/3 pt-5">
                            <Office />
                        </div>
                        <div className="office lg:w-1/3 pt-5">
                            <Contact />
                        </div>
                    </div>
                </div>

            </div>
            <hr />

            <div className='copyright bg-black w-full h-10 flex justify-center items-center'>
                ©Copyrights ÆR Media.
                <div className="p-1">
                <Link href={'https://wa.me/+918007035533'}>
                    Click to Contact Developer!
                </Link>
                </div>
            </div>
           
          </>
    )
}

export default Footer