import React, {useState} from 'react'
import 'firebase/auth'
import {useFirebaseApp, useUser} from 'reactfire'
import { Input, Button } from "@chakra-ui/core";
import { useHistory } from 'react-router-dom'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const firebase = useFirebaseApp();
    const user = useUser();
    const history = useHistory()

    const handleCreate = async() => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        history.replace(`/`)
    }
    const handleLogin = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        history.replace('/')
    }
    const handleLogOut = async () => {
        await firebase.auth().signOut()
    }

    return(
    <div>
        {!user?.data?.email ?
            <div>
                <label htmlFor='email'>Correo electronico</label>
                <Input color='black' 
                type='email' 
                id='email' 
                onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor='password'>contraseña</label>
                <Input color='black'
                type='password'
                id='password'
                mb='1rem'
                onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleCreate} 
                bg='black'
                _focus={{ border:'none' }} 
                _hover={{background:'white', color:'black' }}> Crear cuenta </Button>
                <Button onClick={handleLogin}
                bg='black'
                _focus={{ border:'none' }} 
                _hover={{background:'white', color:'black' }}>  Iniciar sesion </Button>
            </div>
            : 
            <button onClick={handleLogOut}>Cerrar sesion</button>
        }  
    </div>
    )
}
export default Auth;