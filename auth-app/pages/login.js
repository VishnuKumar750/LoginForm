import Head from 'next/head'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Form from './form'
import {loginInputs} from './Inputs'
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()
    const [user, setUser] = useState({});
    const [re,setRe] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    
    useEffect(() => {
        const val = localStorage.getItem('user');
        // console.log(val);
        if(val === undefined) {
                console.log(val);
        } else {            
            setUser(JSON.parse(val));
        }
    },[re])

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        if(user) {
            if(user.email === values.email && user.password === values.password) {
                setRe(false);
                router.push('/')
            } else {
                setRe(!re);       
            }
        } else {
            setRe(!re);
        }
    }
    return (
        <div className={styles.Form}>
        <Head>
            <title>Login</title>
        </Head>
        <div className={styles.card}>
        <h2 className={styles.card.h2}>Login</h2>
        <form onSubmit={handleSubmit}> 
        {loginInputs.map((input) => (
            <Form 
             key={input.id}
             {...input}
             value={values[input.name]}
             onChange={onChange}
            />
        ))
        }
        <button className={styles.btn}>Sign In</button>
        {re && <span className={styles.span}>You are not registered</span>}
        </form>
        <main>
            <p>Don't have an account? <span><Link href={"/register"}>Register</Link></span></p>
        </main>
        </div>
        </div>
    );
}
