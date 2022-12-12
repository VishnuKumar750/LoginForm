import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()
  const [session, setSession] = useState({});
  
  useEffect(() => {
    setSession(JSON.parse(localStorage.getItem('user')));
  }, [session]);
  
  const handleLogOut = () => {
    localStorage.removeItem('user');
    router.push('/');
  }

  return (
    <div className={styles.container}>
    <Head>
      <title>Home Page</title>
    </Head>
    {!session ? 
       Guest() : user({session, handleLogOut})
    };
    </div>
  )
}

function Guest() {
  return (
  <div className={styles.main}>
  <div className={styles.card}>
  <h1 className={styles.card.h2}>Guest</h1>
  </div>
  <h2 className={styles.card.h2}><Link href={'/login'}>Login</Link></h2>
  </div>
  )
}

function user({ session,handleLogOut}) {
  return (
    <div className={styles.main}>
        <div className={styles.card}>
        <h1 className={styles.logo}>Home</h1>
        <h2 className={styles.card.h2}>user name: {session.username}</h2>
        <h2>email: {session.email}</h2>
        </div>
        <button className={styles.btn} onClick={handleLogOut}>Signout</button>
        </div>
  )
}
