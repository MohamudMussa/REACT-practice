import React from 'react'
import {useState} from 'react'
import Router from 'react'


const Form = () => {

    const [username, setUsername] = useState('userName')
    const [password, setPassword] = useState('password')

    const handleSubmit = e => {

        e.preventDefault()
        const dataToSend = JSON.stringify({username: username, password: password})
        console.log(dataToSend)
    
    }

    return (
        <div>
            

            <form>
                <lable> UserName </lable>
                
                <input 
                type="text" 
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                
                <lable> Password </lable>
                <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />

                <button 
                type="submit"
                name="login"
                onClick={e => handleSubmit(e)}
            >
                    Log In
                </button>
                
 
            </form>
            
        </div>
    )
}

export default Form
