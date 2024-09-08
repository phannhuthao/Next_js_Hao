import React from 'react'

export default function page({params}: {
    params: {
        proId: number
    }
}) {
  return (

    <div>
        Product Id {params.proId}
    </div>
  )
}
