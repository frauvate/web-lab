import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Portfolio from './pages/Portfolio.jsx'
import UIKit from './pages/UIKit.jsx'

export default function App() {
    const [currentPage, setCurrentPage] = useState('portfolio')
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main id="main-content">
                {currentPage === 'portfolio' && <Portfolio />}
                {currentPage === 'uikit' && <UIKit />}
            </main>

            <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
                © 2026 Esma Yıldırım · Lab4 – Tailwind CSS v4
            </footer>
        </div>
    )
}
