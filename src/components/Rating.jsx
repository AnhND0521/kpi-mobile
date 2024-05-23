import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Rating = () => {
  return (
    <div className='flex gap-2'>
      <StarIcon className='w-8'/>
      <StarIcon className='w-8'/>
      <StarIcon className='w-8'/>
      <StarIcon className='w-8'/>
      <StarIcon className='w-8'/>
    </div>
  )
}

export default Rating