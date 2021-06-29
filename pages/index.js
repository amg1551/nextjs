import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>wow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        
        
        
        
       <body>

         <h1>The button Element</h1>

       <button type="button" onclick="alert('Hello world!')">Click Me!</button>
 
      </body>
        
      </main>


    </div>
  )
}
