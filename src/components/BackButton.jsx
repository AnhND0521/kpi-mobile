import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const BackButton = (props) => {
  return (
    <Link to={props.to}>
      <ArrowLeftIcon className='absolute top-8 left-12 w-8' color={props.color || 'white'}/>
    </Link>
  )
}

export default BackButton