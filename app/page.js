import Image from 'next/image';
import fresh from '../public/images/fresh-pill.png';
import styles from './page.module.scss';
import GenerateButton from './products/GenerateButton';

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <header>
        <h1>MY VITAMINS</h1>
        <GenerateButton />
      </header>
      <div className={styles.ImageContainer}>
        <Image
          src={fresh}
          alt="vitamins with glas"
          fill
          className={styles.Image}
        />
      </div>
    </main>
  );
}
