import React from 'react'

export default function BT2() {
    return (
        <>
            <div className='form' style={{border: '1px solid black', borderRadius: '8px', padding: '20px', width: '300px', backgroundColor: '#f9f9f9'}}>
                <p>Input label</p>
                <input type='text'></input>

                <div style={{display: 'grid'}}>

                    <input type='checkbox' style={{}}></input>
                    <label htmlFor="">label</label>

                    <input type='checkbox'></input>
                    <label htmlFor="">label</label>

                    <input type='checkbox'></input>
                    <label htmlFor="">label</label>

                    <input type='checkbox'></input>
                    <label htmlFor="">label</label>

                    
                </div>

                <button style={{color: 'black', border: '1px solid black', borderRadius: '6px', cursor: 'pointer', padding: '10px', marginRight: '10px', width: '120px'}}>Clear</button>
                <button style={{backgroundColor: 'blue' , color: 'white', border: '1px solid black', borderRadius: '6px', cursor: 'pointer', padding: '10px', width: '120px'}}>Apply</button>


            </div>
        </>
    )
}
