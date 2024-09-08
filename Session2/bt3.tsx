import React from 'react';

export default function FormLogin() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>

            <div className='admin' style={{ border: '1px solid black', borderRadius: '8px', padding: '20px', width: '300px', backgroundColor: '#f9f9f9' }}>
                <h1 style={{ textAlign: 'center' }}>Admin Login</h1>

                <p>Email address</p>
                <input
                    placeholder='enter email...'
                    className='input'
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />

                <p>Password</p>
                <input
                    type='password'
                    placeholder='enter password...'
                    className='input'
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />

                <div className='checkboxContainer' style={{ marginBottom: '10px' }}>
                    <input type='checkbox' style={{ marginRight: '5px' }}/>
                    <label htmlFor='keepSignedIn'>Keep me signed in</label>
                </div>

                <button
                    className='button'
                    style={{ backgroundColor: 'green', color: 'white', width: '100%', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Continue</button>

                <div className='socialLogin' style={{ marginTop: '10px' }}>
                    <p style={{ textAlign: 'center' }}>- or sign up with -</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button
                            className='socialButton'
                            style={{ padding: '10px', flex: '1', margin: '0 5px' }}
                        >
                            Google
                        </button>
                        <button
                            className='socialButton'
                            style={{ padding: '10px', flex: '1', margin: '0 5px' }}
                        >
                            Apple
                        </button>
                        <button
                            className='socialButton'
                            style={{ padding: '10px', flex: '1', margin: '0 5px' }}
                        >
                            Facebook
                        </button>
                    </div>
                </div>

                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                    Don't have an account? <a href='#'>Sign up here</a>
                </p>
            </div>
        </div>
    );
}
