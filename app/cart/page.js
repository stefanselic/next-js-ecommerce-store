import styles from './page.module.scss';
import Image from 'next/image';
import vitaminb from '../../public/images/vitamin-b.png';
import lime from '../../public/images/lime.png';

export const metadata = {
  title: 'Cart',
  description: 'My Cart page',
};

export default function CartPage() {
  return (
    <main>
      <h1>This is the cart page</h1>
      <div className={styles.images}>
        <Image
          src={vitaminb}
          alt="vitamin-b in glas"
          width="800"
          height="400"
        />
        <Image src={lime} alt="cutted limes" width="800" height="400" />
      </div>
    </main>
  );
}
