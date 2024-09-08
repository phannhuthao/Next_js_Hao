import React from 'react'

export default function BT4() {
  return (
    <>
    <div style={{border: '1px solid black', borderRadius: '8px', padding: '20px', width: '300px', backgroundColor: '#f9f9f9',}}>
        <h1>Form Sign Up</h1>

        <p>Name</p>
        <input type='text' placeholder='Your name'></input>

        <p>Email</p>
        <input type='email' placeholder='you@company.com'></input>

        <p>Phone number</p>
        <input type='number' placeholder='+84 (123) 456-789'></input>

        <p>Address</p>
        <input type='text' style={{height: '50px', width: '165px'}}></input>

        <p>Skills</p>

        <div style={{display: 'grid'}}>
            <input type='checkbox'></input>
            <label>HTML</label>

            <input type='checkbox'></input>
            <label>UX Desgin</label>

            <input type='checkbox'></input>
            <label>CSS</label>

            <input type='checkbox'></input>
            <label>Javascript</label>

            <input type='checkbox'></input>
            <label>ReactJS</label>

            <input type='checkbox'></input>
            <label>Java</label>
        </div>

        <button style={{backgroundColor: "#7f56d9" , color: 'white', width: '200px', height: '30px', cursor: 'pointer', border: '1px solid black', borderRadius: '6px'}}>Sign up</button>
    </div>
    </>
    
  )
}
