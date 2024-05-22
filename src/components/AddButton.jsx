import { PlusIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'
import React from 'react'

const AddButton = () => {
  return (
    <div className='fixed bottom-20 right-4 flex items-center justify-center w-16 h-16 bg-purple shadow-lg rounded-full'>
      <PlusIcon className='text-white w-12' />
    </div>
  )
}

export default AddButton