import Link from 'next/link'
import React from 'react'

type Props = {
    name:string
    link:string
}

const ShowcaseBox = ({name, link}: Props) => {
  return (
    <>
    <Link className='w-96 rounded-md h-40 text-center flex items-center justify-center border p-2 border-[#ffffff42] transition-all duration-200 hover:border-white' href={link}>{name}</Link>
    </>
  )
}

export default ShowcaseBox