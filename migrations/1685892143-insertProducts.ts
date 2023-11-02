import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'magnesium',
    price: 20,
    description:
      'Magnesium is crucial for the human body as it plays a key role in muscle and nerve function, supporting healthy muscle contractions and promoting a balanced nervous system. Magnesium also contributes to bone health by aiding in the regulation of calcium levels and promoting proper bone mineralization.',
  },
  {
    id: 2,
    name: 'vitamin-c',
    price: 16,
    description:
      'Vitamin C is essential for the human body as it plays a vital role in immune function, helping to protect against infections and promote wound healing. It also acts as a powerful antioxidant, helping to neutralize harmful free radicals and protect cells from damage. Furthermore, vitamin C supports the production of collagen, a protein that is important for the health of skin, bones, and connective tissues.',
  },

  {
    id: 3,
    name: 'vitamin-d3',
    price: 18,
    description:
      'Vitamin D3 is best known for strengthening your bones, which it does by helping the body absorb calcium and phosphorus from food. “But it also reduces inflammation, boosts the immune system, promotes heart health, and serves other important functions in the body,”',
  },
  {
    id: 4,
    name: 'omega-3',
    price: 23,
    description:
      'Omega-3 fatty acids, found in foods like fatty fish, offer various health benefits. They support heart health by lowering triglyceride levels and reducing blood pressure, while also promoting brain function and cognitive health. Additionally, omega-3s possess anti-inflammatory properties, aid in eye health, and may contribute to improved mood and mental well-being.',
  },
  {
    id: 5,
    name: 'vitamin-a',
    price: 15,
    description:
      'Vitamin A is essential for maintaining healthy vision, as it is a key component of the retina`s light-sensitive cells, helping to prevent night blindness and other vision problems. It also plays a crucial role in supporting the immune system by promoting the production of white blood cells, which defend the body against infections. ',
  },
  {
    id: 6,
    name: 'vitamin-b',
    price: 18,
    description:
      'Vitamin B, a complex of several B vitamins (e.g., B1, B2, B3, B6, B12, and others), is important for various bodily functions. These vitamins are crucial for converting food into energy, supporting proper nerve function, and maintaining healthy skin, hair, and eyes. They also play a key role in the production of red blood cells and help in the synthesis of DNA and RNA, making them essential for overall growth, development, and the body`s metabolic processes.',
  },
  {
    id: 7,
    name: 'multivitamin',
    price: 25,
    description:
      'Multivitamins are beneficial because they offer a convenient way to supplement a variety of essential vitamins and minerals in one dose, helping to fill potential nutritional gaps in one`s diet. They can promote overall health by ensuring the body receives a broad spectrum of nutrients, supporting various bodily functions, including immune system function, energy production, and maintaining bone health. ',
  },
  {
    id: 8,
    name: 'calcium',
    price: 14,
    description:
      'Calcium is essential for maintaining strong bones and teeth, making it crucial for overall bone health. It also plays a role in muscle function, nerve signaling, and blood clotting, supporting essential bodily functions. Adequate calcium intake can help prevent osteoporosis and reduce the risk of fractures, making it vital for long-term skeletal health.',
  },
  {
    id: 9,
    name: 'zink',
    price: 10,
    description:
      'Zinc is essential for numerous bodily functions, including immune system support, wound healing, and DNA synthesis. It plays a key role in maintaining a healthy immune response and helps the body fight off infections. Additionally, zinc is involved in promoting proper growth and development, making it crucial for overall health and well-being.',
  },
  {
    id: 10,
    name: 'collagen',
    price: 28,
    description:
      'Collagen is a critical protein for the body, as it provides structural support to skin, hair, nails, and connective tissues. It can help maintain skin elasticity, reducing the appearance of wrinkles and promoting a youthful complexion. Furthermore, collagen may support joint health by improving cartilage strength and flexibility, making it valuable for overall skin and musculoskeletal well-being.',
  },
  {
    id: 11,
    name: 'retinol',
    price: 22,
    description:
      'Retinol, a form of vitamin A, is prized for its role in skincare. It promotes skin cell turnover, reducing fine lines and wrinkles, and it helps combat acne by preventing clogged pores. Additionally, retinol stimulates collagen production, enhancing skin`s firmness and elasticity, making it a key ingredient for youthful and healthy skin.',
  },
  {
    id: 12,
    name: 'bcaa',
    price: 15,
    description:
      'Branched-Chain Amino Acids (BCAA) are essential for athletes and fitness enthusiasts. They support muscle growth and repair, reduce exercise-induced fatigue, and improve endurance during workouts. BCAAs can also aid in preserving lean muscle mass and reducing muscle soreness, making them valuable for enhancing physical performance and recovery.',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`

    INSERT INTO products
      (
        name,
        price,
        description
      )
    VALUES
      (
        ${product.name},
        ${product.price},
        ${product.description}
      )
  `;
  }
}

export async function down(sql: Sql) {
  await sql`
    DELETE FROM products
  `;
}
