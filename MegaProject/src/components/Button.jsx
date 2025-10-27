import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    className = '',
    ...props    // If we pass other props except for the predefined one we spread it in the button as attributes
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor}`} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button