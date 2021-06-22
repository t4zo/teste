import Image from 'next/image';
import styles from './index.module.scss';

interface Props {
  link: string;
  image: StaticImageData;
  title: string;
  content: string;
}

export default function Card({ link, image, title, content }: Props) {
  return (
    <a href={link} className={`${styles.card} dark:hover:text-white dark:border-white`} target='_blank'>
      <div className='flex flex-col md:flex-row md:order-2 h-full'>
        {/* <div className='md:order-2'> */}
        {/* <div className='aspect-w-16 aspect-h-9'> */}
        <Image
          src={image}
          alt={`Imagem do ${title}`}
          className='rounded-t-md md:rounded-none md:rounded-l-md'
          placeholder='blur'
          width={350}
          height={200}
          objectFit='cover'
          // layout='fill'
        />
        {/* </div> */}
        {/* </div> */}
        {/* <img src={`assets/images/${title.replaceAll(' ', '').toLowerCase()}`} alt={`Imagem do ${title}`} className='rounded-t-[7px] md:rounded-none md:rounded-l-[7px]' width={271} height={180} /> */}
        <div className='p-4 pb-4'>
          <div className='flex items-center mb-4 space-x-2'>
            <h3>{title}</h3>
            <span>&rarr;</span>
          </div>
          <div className='text-sm'>{content}</div>
        </div>
      </div>
    </a>
  );
}
