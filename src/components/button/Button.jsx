import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Button = ({title,url,color}) => {
  return (
    <Link href={url} className={`${color} flex items-center gap-2 text-base lg:text-xl transition-all duration-500 hover:text-red-600` }>{title}<AiOutlineArrowRight /></Link>
  )
}

export default Button