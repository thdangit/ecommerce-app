import React from 'react'
import Hero from "../components/Home/Hero"
import Card from "../components/Home/Card"
import Product from '../components/Product/Product'

function Home() {
    return (
        <div>
            <Hero/>
            <Card/>
            <Product/>
        </div>
    )
}

export default Home