const menu = [
  {
    header: 'Orders',
    icon: 'order',
    links: [
      {
        link: '/orders/all',
        text: 'My Orders',
      },
      {
        link: '/orders/refunds',
        text: 'Refunds',
      },
    ],
  },
  {
    header: 'Products',
    icon: 'product',
    links: [
      {
        link: '/products/all',
        text: 'My Products',
      },
      {
        link: '/products/add',
        text: 'Add New Product',
      },
    ],
  },
  {
    header: 'Settings',
    icon: 'setting',
    links: [
      {
        link: '/settings/shop',
        text: 'Shop Settings',
      },
    ],
  },
];

export { menu };
