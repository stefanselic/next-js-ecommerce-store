'use client';
import { useState } from 'react';
import styles from './GenerateButton.module.scss';
import randomColor from 'randomcolor';

export default function GenerateButton() {
  const [color, setColor] = useState(randomColor());
  return (
    <button
      className={styles.generateButton}
      onClick={() => setColor(randomColor())}
    >
      Generate
    </button>
  );
}
