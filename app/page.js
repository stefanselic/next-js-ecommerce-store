import Image from 'next/image';
import fresh from '../public/images/fresh-pill.png';
import styles from './page.module.scss';
// import GenerateButton from './products/GenerateButton';
// import vitamine from '../public/images/magnesium.png';

export default function HomePage() {
  return (
    <main>
      <br />
      <br />
      <header>
        <h1>MY VITAMINS</h1>
      </header>
      <div>
        <Image src={fresh} alt="vitamins with glas" width="1340" height="629" />
      </div>
    </main>
  );
}
