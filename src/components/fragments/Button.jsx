import React from 'react'

export default function Button({title, action}) {
  return (
    <div>
        <button className=' bg-lime-700 px-4 py-2 border w-48 border-lime-50 text-white hover:bg-lime-900' type="button">{title}</button>
    </div>
  )
}
