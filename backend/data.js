import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: " Jongjate",
      email: "jongjate.ch@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
      //npm i bcryptjs
    },
    {
      name: "John",
      email: "john@gmail.com",
      password: bcrypt.hashSync("123456"),
      //npm i bcryptjs
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id:'1',
      name: "Nike Slim Shirt",
      slug: "nike-siim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg", //675
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id:'2',
      name: "Adidas Slim Shirt",
      slug: "adidas-siim-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id:'3',
      name: "Nike Slim Pant",
      slug: "nike-siim-pant",
      category: "Parts",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality shirt",
    },
    {
      // _id:'4',
      name: "Adidas Fit Pant",
      slug: "Adidas-Fit-Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
  ],
};

export default data;
