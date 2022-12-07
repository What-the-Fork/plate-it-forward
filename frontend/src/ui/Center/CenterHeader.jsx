import React from 'react'
import styles from './center.module.css'

export function CenterHeader () {
    return (
        <>
            <section className={'bg-light'}>
            <h1 className={'text-center pt-4 display-3'}><strong>Community Centers</strong></h1>
                <p className={'text-center pb-4 border-bottom'}>Find a community center near you! Please note that community centers have different restaurant partners and operating hours. Please contact the center nearest you to learn more about their meal service.</p>
            </section>
        </>
    )
}