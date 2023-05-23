'use client';

import { useState } from 'react';
import styles from './GenerateButton.module.scss';
import randomColor from 'randomcolor';
import { useRouter } from 'next/navigation';

export default function GenerateButton() {
  const [color, setColor] = useState(randomColor());
  const router = useRouter();
  return (
    <button
      className={styles.generateButton}
      onClick={() => {
        setColor(randomColor());
        router.refresh();
      }}
    >
      Add to cart
    </button>
  );
}
