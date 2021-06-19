import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

import Link from 'next/link';

import Switch from '../components/switch';
import Card from '../components/card';
import Footer from '../components/footer';

import sacaImage from '../public/assets/images/saca.jpg';
import saedImage from '../public/assets/images/saed.jpg';
import netflixImage from '../public/assets/images/netflix.jpg';
import pgpImage from '../public/assets/images/pgp.png';
import osFederaImage from '../public/assets/images/osfedera.png';
import covid19Image from '../public/assets/images/covid19.jpg';

export default function HomePage() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='m-auto min-h-screen flex flex-col justify-center align-center bg-white dark:bg-[#191919] text-black dark:text-gray-300'>
      <main className='p-20 flex flex-col flex-1 justify-center items-center'>
        <Switch condition={darkTheme} changeCondition={toggleTheme} offIcon={'&#x2600;&#xFE0F;'} onIcon={'&#127769;'} />
        <h1 className='text-center m-0 text-4xl md:text-5xl lg:text-7xl leading-tight'>
          <span className='hover:text-primary-600 hover:cursor-pointer dark:text-gray-200 dark:hover:text-primary-600'>
            <span className='text-primary-600'>T</span>ácio de <span className='text-primary-600'>S</span>ouza <span className='text-primary-600'>C</span>ampos
          </span>
          <span> | </span>
          <Link href='/contact'>
            <a className='text-primary-600 no-underline hover:underline focus:underline'>Contato</a>
          </Link>
        </h1>
        <div className='flex justify-center items-center flex-wrap lg:max-w-[1400px] mt-12'>
          <Card link='https://play.google.com/store/apps/details?id=xyz.saca' image={sacaImage} title='SACA' content='Find in-depth information about Next.js features and API.' />
          <Card link='http://159.89.244.218' image={saedImage} title='SAED' content='Learn about Next.js in an interactive course with quizzes!' />
          <Card link='https://pgpjuazeiroba.com.br' image={pgpImage} title='PGP' content='Instantly deploy your Next.js site to a public URL with Vercel.' />
          <Card link='https://netflix-9zvv4lgoy-tacio.vercel.app' image={netflixImage} title='Netflix' content='Discover and deploy boilerplate example Next.js projects.' />
          <Card link='https://covid19-tracker-azure.vercel.app' image={covid19Image} title='Covid19' content='Instantly deploy your Next.js site to a public URL with Vercel.' />
          <Card link='https://osfedera.netlify.app' image={osFederaImage} title='Os Federa' content='Instantly deploy your Next.js site to a public URL with Vercel.' />
        </div>
      </main>

      <Footer />
    </div>
  );
}
