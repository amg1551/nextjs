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

         <h1>amg ın sitesi</h1>

           <button onClick={myFunction}>tıkla bana</button>






 
      </body>
        
      </main>


    </div>
  );

  function myFunction() {
    alert("neden bana tıklıyon");

  }



}
