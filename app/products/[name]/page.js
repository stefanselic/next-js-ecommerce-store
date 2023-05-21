import Image from 'next/image';
import { products } from '../../../database/products';
import { notFound } from 'next/navigation';
import { getProductByName } from '../../../database/products';

export const dynamic = 'force-dynamic';

export default function FarmPage({ params }) {
  const singleProduct = getProductByName(params.name);
  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <h2>{singleProduct.price}</h2>
      <Image
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
      />
      <h3>{singleProduct.description}</h3>
    </main>
  );
}
