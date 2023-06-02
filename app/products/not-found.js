import Link from 'next/link';

export const rootNotFoundMetaData = {
  title: 'Product Found',
  description: "Sorry can't find page you are looking for",
};

export default function RootNotFound() {
  return (
    <div>
      Ups! Something went wrong. Please visit an existing{' '}
      <Link href="/../products">Product</Link> page
    </div>
  );
}
