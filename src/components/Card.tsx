import { ReactNode } from 'react'

const variantStyles = {
    bordered: 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md',
    shadowed: 'border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl',
}

export interface CardProps {
    children?: ReactNode;
    variant?: 'bordered' | 'shadowed';
    title?: string;
    subtitle?: string;
    footer?: ReactNode;
    image?: string;
    imageAlt?: string;
    className?: string;
}

export default function Card({
    children,
    variant = 'shadowed',
    title,
    subtitle,
    footer,
    image,
    imageAlt = '',
    className = '',
}: CardProps) {
    return (
        <div
            className={`
        rounded-2xl overflow-hidden transition-all duration-300
        ${variantStyles[variant] || variantStyles.shadowed}
        ${className}
      `}
        >
            {image && (
                <div className="w-full h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            <div className="p-5">
                {title && (
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {title}
                    </h3>
                )}
                {subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {subtitle}
                    </p>
                )}
                <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {children}
                </div>
            </div>

            {footer && (
                <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                    {footer}
                </div>
            )}
        </div>
    )
}
