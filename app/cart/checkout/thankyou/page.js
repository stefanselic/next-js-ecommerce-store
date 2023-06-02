import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you',
  description: 'Thank you page',
};

export default function ThankYouPage() {
  return (
    <div>
      <main className={styles.infoContainer}>
        <div>
          <h1>Thank you for your order!</h1>
        </div>
        <div>
          <h2>
            Have fun with your items and stay <i>healthy 💪🏼</i>
          </h2>
        </div>
      </main>
    </div>
  );
}
