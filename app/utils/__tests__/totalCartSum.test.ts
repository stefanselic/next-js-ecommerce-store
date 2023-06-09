import { expect, test } from '@jest/globals';
import { cartSum } from '../cartSum';

const mockedCart = [
  {
    id: 2,
    name: 'vitamin-c',
    price: 16,
    description:
      'Vitamin C is essential for the human body as it plays a vital role in immune function, helping to protect against infections and promote wound healing. It also acts as a powerful antioxidant, helping to neutralize harmful free radicals and protect cells from damage. Furthermore, vitamin C supports the production of collagen, a protein that is important for the health of skin, bones, and connective tissues.',
    quantity: 2,
  },
  {
    id: 3,
    name: 'vitamin-d3',
    price: 18,
    description:
      'Vitamin D3 is best known for strengthening your bones, which it does by helping the body absorb calcium and phosphorus from food. “But it also reduces inflammation, boosts the immune system, promotes heart health, and serves other important functions in the body,”',
    quantity: 2,
  },
];

test('calculate the correct total sum', () => {
  const result = cartSum(mockedCart);

  expect(result).toBe(68);
});
