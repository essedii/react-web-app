import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const NavBar = ({linkName}) => {
  const [page, setPage] = useState(linkName)


  return (
    <nav className="nav bg-primary">
        <Link className='text-dark' to={linkName === 'home' ? '/' : `/${linkName}`}> {linkName} </Link>
    </nav>
  )
}

