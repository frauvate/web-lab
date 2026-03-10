import React from 'react'

const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
}

const variantClasses = {
    primary:
        'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-blue-500',
    secondary:
        'bg-gray-600 hover:bg-gray-700 text-white dark:bg-gray-500 dark:hover:bg-gray-600 focus:ring-gray-400',
    success:
        'bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 focus:ring-emerald-500',
    danger:
        'bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600 focus:ring-red-500',
    outline:
        'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white focus:ring-blue-500',
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    onClick,
    type = 'button',
    className = '',
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
        inline-flex items-center justify-center gap-2 font-semibold rounded-lg
        transition-all duration-200 ease-in-out cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        active:scale-95
        ${sizeClasses[size] || sizeClasses.md}
        ${variantClasses[variant] || variantClasses.primary}
        ${className}
      `}
        >
            {children}
        </button>
    )
}
