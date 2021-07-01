import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>site içinde site</title>
        <link rel="icon" href="/indir.jpg" />
      </Head>

      <main className={styles.main}>

        
        
        
        
       <body>

         <h1>amg ın sitesi</h1>

           <button onClick={myFunction}>tıkla bana</button>




           <iframe src="/index.html" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

 
      </body>
        
      </main>


    </div>
  );

  function myFunction() {
    alert("neden bana tıklıyon");

  }



}
