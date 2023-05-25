'use client';

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
    <>
      <h2>Contact Information</h2>
      <form>
        <section>
          <div className={styles.input}>
            <label htmlFor="firstName">
              <input
                data-test-id="checkout-first-name"
                placeholder="First name*"
                value={firstName}
                onChange={(event) => setFirstName(event.currentTarget.value)}
              />
            </label>
            <label htmlFor="lastName">
              <input
                data-test-id="checkout-last-name"
                placeholder="Last name*"
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input
                data-test-id="checkout-email"
                placeholder="E-Mail*"
                value={email}
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="adress">
              <input
                data-test-id="checkout-address"
                placeholder="Adress*"
                value={address}
                onChange={(event) => {
                  setAddress(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              <input
                data-test-id="checkout-city"
                placeholder="City*"
                value={city}
                onChange={(event) => {
                  setCity(event.currentTarget.value);
                }}
              />
            </label>
            <label htmlFor="postalCode">
              <input
                data-test-id="checkout-postal-code"
                placeholder="Postal Code*"
                value={postalCode}
                onChange={(event) => {
                  setPostalCode(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="country">
              <input
                data-test-id="checkout-country"
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
          <div>
            <label htmlFor="creditCard">
              <input
                data-test-id="checkout-credit-card"
                placeholder="Credit card*"
                value={creditCard}
                onChange={(event) => {
                  setCreditCard(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="expirationDate">
              <input
                data-test-id="checkout-expiration-date"
                placeholder="(MM/YY)*"
                value={expirationDate}
                onChange={(event) => {
                  setExpirationDate(event.currentTarget.value);
                }}
              />
            </label>
            <label htmlFor="securityCode">
              <input
                data-test-id="checkout-security-code"
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
          <button data-test-id="checkout-confirm-order">Confirm Order</button>
        </section>
      </form>
    </>
  );
}
