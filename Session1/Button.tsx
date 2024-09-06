import React from 'react'

type Button = {
    children: React.ReactNode
}

export default function Button({children} : Button) {
  return (
   <button style={{margin: '0 10px', padding: '10px 20px'}}>
    {children}
   </button>
  );
}
