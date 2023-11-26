import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container'>
        <h1>Welcome to Our Channel</h1>
      </div>
    </main>
  )
}
