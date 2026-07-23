export type Portion = {
  label: "Full" | "Half" | "Qtr";
  price: number;
};

export type PortionedMenuItem = {
  name: string;
  portions: Portion[];
};

export type SinglePriceMenuItem = {
  name: string;
  price: number;
};

export const mainDishes: PortionedMenuItem[] = [
  {
    name: "Masala Shawaya",
    portions: [
      { label: "Full", price: 449 },
      { label: "Half", price: 249 },
      { label: "Qtr", price: 149 },
    ],
  },
  {
    name: "Normal Shawaya",
    portions: [
      { label: "Full", price: 399 },
      { label: "Half", price: 239 },
      { label: "Qtr", price: 129 },
    ],
  },
];

export const rollsAndBurgers: SinglePriceMenuItem[] = [
  { name: "Shawaya Roll", price: 199 },
  { name: "Shawaya Burger", price: 199 },
];
