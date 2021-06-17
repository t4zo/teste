import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

import Switch from '../components/switch';

// import { prefix } from '../next-prefix.js';

import sacaImage from '../public/assets/images/saca.jpg';
import saedImage from '../public/assets/images/saed.jpg';
import netflixImage from '../public/assets/images/netflix.jpg';
import pgpImage from '../public/assets/images/pgp.png';
import osFederaImage from '../public/assets/images/osFedera.png';
import covid19Image from '../public/assets/images/covid-19.jpg';

export default function HomePage() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='m-auto min-h-screen flex flex-col justify-center align-center bg-white dark:bg-[#191919] text-black dark:text-gray-300'>
      <main className='p-20 flex flex-col flex-1 justify-center items-center'>
        <h1 className='text-center m-0 text-7xl leading-tight'>
          <span className='dark:text-gray-200 hover:text-primary-600 hover:cursor-pointer'>
            <span className='text-primary-600'>T</span>ácio de <span className='text-primary-600'>S</span>ouza <span className='text-primary-600'>C</span>ampos
            |{' '}
          </span>
          <Link href='/contact'>
            <a className='text-primary-600 no-underline hover:underline focus:underline'>Contato</a>
          </Link>
        </h1>
        <p className='text-center text-2xl leading-normal'>
          {/* Projetos */}
          {/* <code className='bg-[#fafafa] p-3 rounded text-lg'>pages/index.js</code> */}
          <Switch condition={darkTheme} changeCondition={toggleTheme} offIcon={'&#x2600;&#xFE0F;'} onIcon={'&#127769;'} />
          {/* <Switch condition={darkTheme} changeCondition={toggleTheme} offIcon={🌙} onIcon={☀️} /> */}
        </p>
        <div className='flex justify-center items-center flex-wrap max-w-[1400px] mt-12'>
          <a
            href='https://play.google.com/store/apps/details?id=xyz.saca'
            className={`${styles.card} dark:hover:text-white dark:border-[#eaeaea]`}
            target='_blank'>
            <div className='flex'>
              <div className='p-6'>
                <div className='flex items-center mb-[16px] space-x-2'>
                  <h3>SACA</h3>
                  <span>&rarr;</span>
                </div>
                <p>Find in-depth information about Next.js features and API.</p>
              </div>
              <Image src={sacaImage} alt='Imagem aplicativo SACA' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
              {/* <img src='assets/images/saca.jpg' alt='Imagem aplicativo SACA' className={styles.cardImage} placeholder='blur' height={180} width={271} /> */}
            </div>
          </a>
          <a href='http://159.89.244.218' className={`${styles.card} dark:hover:text-white dark:border-[#eaeaea]`} target='_blank'>
            <div className='flex'>
              <div className='p-6'>
                <div className='flex items-center mb-[16px] space-x-2'>
                  <h3>SAED</h3>
                  <span>&rarr;</span>
                </div>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </div>
              <Image src={saedImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
              {/* <img src='assets/images/saed.jpg' alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={180} width={271} /> */}
            </div>
          </a>
          <a href='https://pgpjuazeiroba.com.br' className={`${styles.card} dark:hover:text-white dark:border-[#eaeaea]`} target='_blank'>
            <div className='flex'>
              <div className='p-6'>
                <div className='flex items-center mb-[16px] space-x-2'>
                  <h3>PGP</h3>
                  <span>&rarr;</span>
                </div>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </div>
              <Image src={pgpImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
              {/* <img src='assets/images/pgp.png' alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={180} width={271} /> */}
            </div>
          </a>
          <a href='https://netflix-9zvv4lgoy-tacio.vercel.app' className={`${styles.card} dark:hover:text-white dark:border-[#eaeaea]`} target='_blank'>
            <div className='flex'>
              <div className='p-6'>
                <div className='flex items-center mb-[16px] space-x-2'>
                  <h3>Netflix</h3>
                  <span>&rarr;</span>
                </div>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </div>
              <Image src={netflixImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
              {/* <img src='assets/images/netflix.jpg' alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={180} width={271} /> */}
            </div>
          </a>
          <a href='https://covid19-tracker-azure.vercel.app' className={`${styles.card} dark:hover:text-white dark:border-[#eaeaea]`} target='_blank'>
            <div className='flex'>
              <div className='p-6'>
                <div className='flex items-center mb-[16px] space-x-2'>
                  <h3>Covid 19</h3>
                  <span>&rarr;</span>
                </div>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </div>
              <Image src={covid19Image} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
              {/* <img src='assets/images/covid-19.jpg' alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={180} width={271} /> */}
            </div>
          </a>
          <a href='https://osfedera.netlify.app' className={`${styles.card} dark:hover:text-white dark:border-[#eaeaea]`} target='_blank'>
            <div className='flex'>
              <div className='p-6'>
                <div className='flex items-center mb-[16px] space-x-2'>
                  <h3>Os Federa</h3>
                  <span>&rarr;</span>
                </div>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </div>
              <Image src={osFederaImage} alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={200} width={350} objectFit='cover' />
              {/* <img src='assets/images/osFedera.png' alt='Imagem SAED' className={styles.cardImage} placeholder='blur' height={180} width={271} /> */}
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
