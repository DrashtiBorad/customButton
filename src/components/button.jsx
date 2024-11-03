import React from 'react'

const CustomButton= ({linkRedirection,backgroundColor,buttonText}) => {
  return (
    <div>
      <a href={linkRedirection} className={`border border-black rounded-md px-4 py-4 bg-blue-500 text-white`}>{buttonText}</a>
    </div>
  )
}

export default CustomButton
