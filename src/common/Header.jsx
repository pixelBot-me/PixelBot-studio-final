import React from 'react'
import '../assets/css/header.css'
import '../assets/js/header.js'

export default function Header() {
    return (
        <>
            <nav id="navbar">
                <span>Hello, It's me</span>
                <button>Pickles!</button>
            </nav>
            <header>
                <h1>Ode to a Large Tuna in the Market</h1>
                <h2>By Pablo Neruda</h2>
            </header>
            <article>
                <p>   undefiled,<br />navigating now<br />the waters of death.</p>
            </article >
            <footer>Extracted from <a href="https://www.poetryfoundation.org/poetrymagazine/poems/detail/49322">Poetry Foundation</a></footer>
        </>
    )
}
