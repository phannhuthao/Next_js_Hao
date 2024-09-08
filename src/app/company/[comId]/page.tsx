import React from 'react'

export default function page({params}: {
    params: {
        comId: string
    }
}) {
  return (

    <div>
       <p> Company name: <h1>{params.comId}</h1></p>
    </div>
  )
}
