import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
    <div className='text-center'>
        <h1 className={styles.title}>HAMID MACHFUDIN SUKARDI</h1>
        <p>Thank you for visiting. This is my personal page.</p>
    </div>
    <header>
      <ul className={styles.list}>
        <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
        <li className={styles.item}><Link href="/research"><a>Research</a></Link></li>
        <li className={styles.item}><Link href="/blog"><a>Blog</a></Link></li>
        <li className={styles.item}><Link href="/cv"><a>CV</a></Link></li>
      </ul>
    </header>
    <hr/>
    </>
  )
}
