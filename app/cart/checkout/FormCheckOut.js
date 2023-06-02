'use client';

import Link from 'next/link';
import styles from './FormCheckOut.module.scss';
import { useState } from 'react';

export default function FormCheckout() {
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
                placeholder="Credit card*"
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
                placeholder="Security code*"
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
            data-test-id="checkout-confirm-order"
            className={styles.confirmOrderButton}
          >
            <Link className={styles.link} href="cart/checkout/thankyou">
              Confirm Order
            </Link>
          </button>
        </section>
      </form>
    </div>
  );
}
