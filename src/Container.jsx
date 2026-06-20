import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto w-full max-w-[1370px] px-6 sm:px-8 ${className}`}>{children}</div>
  )
}

export default Container
