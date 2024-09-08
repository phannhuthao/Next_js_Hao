import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function InputWithIcon() {
  return (
    <div className="relative">
      <p style={{color: 'blue'}}>Label</p>
      <div className="relative">
        <input
          type="text"
          placeholder="placeholder"
          className="border border-gray-300 rounded py-2 px-4 pl-10 pr-4 w-full"
        />
        <FontAwesomeIcon
          icon={faEye}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>
      <p style={{color: 'gray'}} >Helper Text</p>
    </div>
  )
}
