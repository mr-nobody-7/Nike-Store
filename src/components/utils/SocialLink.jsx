import React from 'react'

const SocialLink = props => {
    const {icon} = props

  return (
    <>
        <img src={icon} alt='icon/social' className='w-8 h-8 felx items-center cursor-pointer md:w-5 md:h-5 sm:w-4 sm:h-4 transition-all duration-200 hover:scale-110'/>
    </>
  )
}

export default SocialLink