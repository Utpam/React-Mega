import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {

    const id = useId()

  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        options={options}
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {   // if options have a value only then map/loop through it
                options?.map((option) => {
                    <option key={option} value={option}>
                    </option>
                })
            }
        </select>
    </div>
  )
}

// Another way to wrap the function in forward ref [1st way is in Input.jsx]
export default React.forwardRef(Select)