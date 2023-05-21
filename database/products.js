// server side code only run in server components
// import fs from 'node:fs';

// fs.readFile('../app/page.js', () => {});

export const products = [
  {
    id: 1,
    name: 'magnesium',
    price: '19,99 ',
    description:
      'Magnesium is crucial for the human body as it plays a key role in muscle and nerve function, supporting healthy muscle contractions and promoting a balanced nervous system. Magnesium also contributes to bone health by aiding in the regulation of calcium levels and promoting proper bone mineralization.',
  },
  {
    id: 2,
    name: 'vitamin-c',
    price: '15,99',
    description:
      'Vitamin C is essential for the human body as it plays a vital role in immune function, helping to protect against infections and promote wound healing. It also acts as a powerful antioxidant, helping to neutralize harmful free radicals and protect cells from damage. Furthermore, vitamin C supports the production of collagen, a protein that is important for the health of skin, bones, and connective tissues.',
  },

  {
    id: 3,
    name: 'vitamin-d3',
    price: '17,99',
    description:
      'Vitamin D3 is best known for strengthening your bones, which it does by helping the body absorb calcium and phosphorus from food. “But it also reduces inflammation, boosts the immune system, promotes heart health, and serves other important functions in the body,”',
  },
  {
    id: 4,
    name: 'omega-3',
    price: '22,99',
    description:
      'Omega-3 fatty acids, found in foods like fatty fish, offer various health benefits. They support heart health by lowering triglyceride levels and reducing blood pressure, while also promoting brain function and cognitive health. Additionally, omega-3s possess anti-inflammatory properties, aid in eye health, and may contribute to improved mood and mental well-being.',
  },
];

export function getProductByName(name) {
  return products.find((product) => product.name === name);
}
