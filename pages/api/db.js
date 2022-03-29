/* eslint-disable indent */
const client = [{
    id: 1,
    name: 'Maria da Silva',
    loja: 'Estilo Pri',
    this_month: 'Março',
    last_month: 'Fevereiro',
    year: 2022,
    meta: 100000,
    total_billing: 120300,
    vendas: [{
        this_month: 26123,
        last_month: 11000,
      },
      {
        this_month: 6500,
        last_month: 20000,
      },
      {
        this_month: 7964,
        last_month: 17654.70,
      },
      {
        this_month: 30100,
        last_month: 23100,
      },
      {
        this_month: 9642,
        last_month: 12345,
      },
      {
        this_month: 14662,
        last_month: 10564,
      },
      {
        this_month: 6000,
        last_month: 4000,
      }, {
        this_month: 30090.50,
        last_month: 12543,
      }, {},
    ],
  },
  {
    id: 2,
    name: 'Carlos Lucas',
    loja: 'Mary Lingerie',
    this_month: 'Março',
    last_month: 'Fevereiro',
    total_billing: 72620,
    year: 2022,
    meta: 88000,
    vendas: [{
        this_month: 36532,
        last_month: 12354,
      },
      {
        this_month: 12000,
        last_month: 6987,
      },
      {
        this_month: 5984,
        last_month: 2604,
      },
      {
        this_month: 3908,
        last_month: 6780,
      },
      {
        this_month: 9000,
        last_month: 12489,
      },
      {
        this_month: 3800,
        last_month: 2500,
      },
      {
        this_month: 5304,
        last_month: 7935,
      }, {
        this_month: 9620,
        last_month: 5400,
      }, {},
    ],
  },
  {
    id: 3,
    name: 'Pedro Mendes',
    loja: 'Loja Belíssima',
    this_month: 'Março',
    last_month: 'Fevereiro',
    year: 2022,
    meta: 150000,
    total_billing: 131323.23,
    vendas: [{
        this_month: 26900.50,
        last_month: 12300,
      },
      {
        this_month: 26060.50,
        last_month: 24060.50,
      },
      {
        this_month: 21000,
        last_month: 21960.90,
      },
      {
        this_month: 20634,
        last_month: 28036.62,
      },
      {
        this_month: 36706,
        last_month: 38652,
      },
      {
        this_month: 50436,
        last_month: 43210,
      },
      {
        this_month: 51364.55,
        last_month: 49744,
      }, {
        this_month: 42000.99,
        last_month: 34620,
      }, {},
    ],
  },
];

const totalBuys = [{
  loja: 'Vilma Calçados',
  sales: 262,
  total_sales: 3624.60,
}, {
  loja: 'Mary Lingerie',
  sales: 654,
  total_sales: 16233.98,
}, {
  loja: 'Loja Belíssima',
  sales: 150,
  total_sales: 5620.22,
}];

const sales = [{
  loja: 'Vilma Calçados',
  product: 'Brincos #23',
  value: 65.50,
  date: '17/03/2022',
}, {
  loja: 'Estilo Pri',
  product: 'Conjunto #32',
  value: 224.99,
  date: '20/03/2022',
}, {
  loja: 'Mary Lingerie',
  product: 'Body #67',
  value: 72.80,
  date: '19/03/2022',
}, {
  loja: 'Vilma Calçados',
  product: 'Sandália #69',
  value: 45.00,
  date: '15/03/2022',
}, {
  loja: 'Mary Lingerie',
  product: 'Lingerie #50',
  value: 150.00,
  date: '16/03/2022',
}, {
  loja: 'Loja Belíssima',
  product: 'Camisa #89',
  value: 78.65,
  date: '14/03/2022',
}, {
  loja: 'Estilo Pri',
  product: 'Brincos Gold #53',
  value: 32.00,
  date: '16/03/2022',
}, {
  loja: 'Loja Belíssima',
  product: 'Brincos #57',
  value: 19.90,
  date: '18/03/2022',
}, {
  loja: 'Vilma Calçados',
  product: 'Rasteirinha #237',
  value: 72.55,
  date: '19/03/2022',
}];

export { client, totalBuys, sales };
