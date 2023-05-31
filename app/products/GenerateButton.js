'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import styles from './GenerateButton.module.scss';
import randomColor from 'randomcolor';
import { useRouter } from 'next/navigation';

export default function GenerateButton() {
  const [color, setColor] = useState('red');
  const router = useRouter();

  // We dont use document.cookie
  useEffect(() => {
    const allCookies = document.cookie;

    const buttonColor = allCookies;
    // console.log(document.cookie);

    setColor(buttonColor);
  }, []);

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
