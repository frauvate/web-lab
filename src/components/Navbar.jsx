import React from 'react'

export default function Navbar({ currentPage, setCurrentPage, darkMode, setDarkMode }) {
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">EY</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                            Esma Yıldırım
                        </span>
                    </div>

                    {/* Nav Links */}
                    <nav aria-label="Ana navigasyon" className="flex items-center gap-1 sm:gap-2">
                        <button
                            id="nav-portfolio"
                            onClick={() => setCurrentPage('portfolio')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${currentPage === 'portfolio'
                                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            Portfolio
                        </button>
                        <button
                            id="nav-uikit"
                            onClick={() => setCurrentPage('uikit')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${currentPage === 'uikit'
                                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            UI Kit
                        </button>

                        {/* Dark Mode Toggle */}
                        <button
                            id="dark-mode-toggle"
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label={darkMode ? 'Açık temaya geç' : 'Koyu temaya geç'}
                            className="ml-2 w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
