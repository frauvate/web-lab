import React from 'react'

export default function Input({
    label,
    id,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    error = '',
    helperText = '',
    disabled = false,
    required = false,
    className = '',
}) {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <input
                id={inputId}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                aria-invalid={!!error}
                className={`
          w-full px-3.5 py-2.5 rounded-lg text-sm transition-all duration-200
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          border focus:outline-none focus:ring-2 focus:ring-offset-1
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-400 dark:border-red-400'
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-400'
                    }
        `}
            />

            {error && (
                <p id={`${inputId}-error`} role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p id={`${inputId}-helper`} className="text-xs text-gray-500 dark:text-gray-400">
                    {helperText}
                </p>
            )}
        </div>
    )
}
