import Image from 'next/image';
import styles from './index.module.scss';

import sacaImage from '../public/assets/images/saca.jpg';
import saedImage from '../public/assets/images/saed.jpg';
import netflixImage from '../public/assets/images/netflix.jpg';
import pgpImage from '../public/assets/images/pgp.png';
import osFederaImage from '../public/assets/images/osFedera.png';
import covid19Image from '../public/assets/images/covid-19.jpg';

export default function HomePage() {
  return (
    <div className='m-auto min-h-screen flex flex-col justify-center align-center'>
      <main className='p-20 flex flex-col flex-1 justify-center items-center'>
        <h1 className='text-center m-0 text-7xl leading-tight'>
          {/* Welcome to{' '} */}
          <a href='https://nextjs.org' className='text-purple-600 no-underline hover:underline focus:underline'>
            Tácio de Souza Campos
          </a>
        </h1>
        <p className='text-center text-2xl leading-normal'>
          Projetos
          {/* <code className='bg-[#fafafa] p-3 rounded text-lg'>pages/index.js</code> */}
        </p>
        <div className='flex justify-center items-center flex-wrap max-w-[1400px] mt-12'>
          <a href='https://play.google.com/store/apps/details?id=xyz.saca' className={styles.card}>
            <div className='flex'>
              <div className='p-6'>
                <h3>SACA &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </div>
              <Image src={sacaImage} alt='Imagem aplicativo SACA' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
            </div>
          </a>
          <a href='http://159.89.244.218' className={styles.card}>
            <div className='flex'>
              <div className='p-6'>
                <h3>SAED &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </div>
              <Image src={saedImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
            </div>
          </a>
          <a href='https://pgpjuazeiroba.com.br' className={styles.card}>
            <div className='flex'>
              <div className='p-6'>
                <h3>PGP &rarr;</h3>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </div>
              <Image src={pgpImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
            </div>
          </a>
          <a href='https://netflix-9zvv4lgoy-tacio.vercel.app' className={styles.card}>
            <div className='flex'>
              <div className='p-6'>
                <h3>Netflix &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </div>
              <Image src={netflixImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
            </div>
          </a>
          <a href='https://covid19-tracker-azure.vercel.app' className={styles.card}>
            <div className='flex'>
              <div className='p-6'>
                <h3>Covid 19 &rarr;</h3>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </div>
              <Image src={covid19Image} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
            </div>
          </a>
          <a href='https://osfedera.netlify.app' className={styles.card}>
            <div className='flex'>
              <div className='p-6'>
                <h3>Os Federa &rarr;</h3>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </div>
              <Image src={osFederaImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
            </div>
          </a>
        </div>
      </main>

      {/* <footer className='p-5 border-t border-[#eaeaea]'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center'>
          Powered by <img src='/vercel.svg' alt='Vercel' className='h-4 ml-2' />
        </a>
      </footer> */}
    </div>
  );
}
