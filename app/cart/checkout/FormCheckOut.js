'use client';

import styles from './FormCheckOut.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FormCheckout() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const isFormValid =
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      address !== '' &&
      city !== '' &&
      postalCode !== '' &&
      country !== '' &&
      creditCard !== '' &&
      expirationDate !== '' &&
      securityCode !== '';

    setFormValid(isFormValid);
  }, [
    firstName,
    lastName,
    email,
    address,
    city,
    postalCode,
    country,
    creditCard,
    expirationDate,
    securityCode,
  ]);

  useEffect(() => {
    if (formValid && submitted) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setAddress('');
      setCity('');
      setPostalCode('');
      setCountry('');
      setCreditCard('');
      setExpirationDate('');
      setSecurityCode('');
      setSubmitted(false);
    }
  }, [formValid, submitted]);

  return (
    <div className={styles.checkoutForm}>
      <h2 className={styles.heading}>Contact Information</h2>
      <form>
        <section>
          <div className={styles.row}>
            <label htmlFor="firstName" className={styles.label}>
              <input
                data-test-id="checkout-first-name"
                className={styles.input}
                placeholder="First name*"
                value={firstName}
                onChange={(event) => setFirstName(event.currentTarget.value)}
                required
              />
            </label>
            <label htmlFor="lastName" className={styles.label}>
              <input
                data-test-id="checkout-last-name"
                className={styles.input}
                placeholder="Last name*"
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label htmlFor="email" className={styles.label}>
              <input
                data-test-id="checkout-email"
                className={styles.input}
                placeholder="E-Mail*"
                value={email}
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label htmlFor="adress" className={styles.label}>
              <input
                data-test-id="checkout-address"
                className={styles.input}
                placeholder="Adress*"
                value={address}
                onChange={(event) => {
                  setAddress(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label htmlFor="city" className={styles.label}>
              <input
                data-test-id="checkout-city"
                className={styles.input}
                placeholder="City*"
                value={city}
                onChange={(event) => {
                  setCity(event.currentTarget.value);
                }}
              />
            </label>
            <label htmlFor="postalCode" className={styles.label}>
              <input
                data-test-id="checkout-postal-code"
                className={styles.input}
                placeholder="Postal Code*"
                value={postalCode}
                onChange={(event) => {
                  setPostalCode(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label htmlFor="country" className={styles.label}>
              <input
                data-test-id="checkout-country"
                className={styles.input}
                placeholder="Country*"
                value={country}
                onChange={(event) => {
                  setCountry(event.currentTarget.value);
                }}
              />
            </label>
          </div>
        </section>
        <h2>Payment Information</h2>
        <section>
          <div className={styles.row}>
            <label htmlFor="creditCard" className={styles.label}>
              <input
                data-test-id="checkout-credit-card"
                className={styles.input}
                placeholder="1234 1234 1234 1234*"
                value={creditCard}
                onChange={(event) => {
                  setCreditCard(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label htmlFor="expirationDate" className={styles.label}>
              <input
                data-test-id="checkout-expiration-date"
                className={styles.input}
                placeholder="(MM/YY)*"
                value={expirationDate}
                onChange={(event) => {
                  setExpirationDate(event.currentTarget.value);
                }}
              />
            </label>
            <label htmlFor="securityCode" className={styles.label}>
              <input
                data-test-id="checkout-security-code"
                className={styles.input}
                placeholder="456*"
                value={securityCode}
                onChange={(event) => {
                  setSecurityCode(event.currentTarget.value);
                }}
              />
            </label>
          </div>
        </section>
        <section>
          <button
            disabled={!formValid}
            data-test-id="checkout-confirm-order"
            className={styles.confirmOrderButton}
            type="button"
            onClick={() => router.push('/cart/checkout/thankyou')}
          >
            Confirm Order
          </button>
        </section>
      </form>
    </div>
  );
}
