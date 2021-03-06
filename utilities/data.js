import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: '1to4 Splitter Board',
      slug: '1to4-splitter-board',
      category: 'Boards',
      image: '/images/1to4-splitter-board-side.jpg',
      price: 0.2,
      countInStock: 20,
      description: '1 to 4 Splitter Boards',
    },
    {
      name: '17P Breakout Board',
      slug: '17p-breakout-board',
      category: 'Boards',
      image: '/images/17p-breakout-board-side.jpg',
      price: 0.2,
      countInStock: 20,
      description: '17 port breakout boards',
    },
    {
      name: 'm.2 PCIE Riser',
      slug: 'm2-pcie-riser',
      category: 'Boards',
      image: '/images/m.2-pcie-riser-front.jpg',
      price: 0.2,
      countInStock: 20,
      description: 'm.2 risers',
    },
    {
      name: 'PSU Splitter',
      slug: 'psu-splitter',
      category: 'Cords',
      image: '/images/PSU-splitter-top.jpg',
      price: 19.99,
      countInStock: 20,
      description: 'Power Supply Splitter cords',
    },
    {
      name: '6P to Dual 8P (20cm)',
      slug: '6p-to-dual-8p',
      category: 'Cords',
      image: '/images/6p-to-D-8p-20cm-side.jpg',
      price: 0.2,
      countInStock: 20,
      description: '20cm long 6 Port to dual 8 Port cords',
    },
  ],
};
export default data;
