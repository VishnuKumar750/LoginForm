import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Login.module.css'
import { registerInputs } from './Inputs'
import Form from './form'
import { useRouter } from 'next/router'

export default function Register() {
    const router = useRouter();
    const [ps, setPs] = useState(false);
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        ConfirmPassword: ""
    }) 

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(values.ConfirmPassword !== values.password) {
            setPs(!ps);
        } else {
            console.log('password matched');
            setPs(false);
            localStorage.setItem('user', JSON.stringify(values));
            setTimeout(() => {
                router.push('/login')
            }, 1000)
        }
    }


    return (
        <div className={styles.Form}>
        <Head>
            <title>Register</title>
        </Head>
        <div className={styles.card}>
        <h2 className={styles.card.h2}>Register</h2>
        <form onSubmit={handleSubmit}> 
        {registerInputs.map((input) => (
            <Form 
             key={input.id}
             {...input}
             value={values[input.name]}
             onChange={onChange}
            />
        ))}
            {ps && <span className={styles.span}>Password does not match</span>}
            <button className={styles.btn}>Sign In</button>
        </form>
        <main>
            <p>Already have an account? <span><Link href={"/login"}>Login</Link></span></p>
        </main>
        </div>
        </div>
    );
}