'use server';
import { cookies } from 'next/headers';

export async function setCookie(name, value) {
  await cookies().set(name, value, { secure: true });
}
