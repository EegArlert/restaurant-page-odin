import cafeAuLait from '../assets/pictures/beverages/cafe_au_lait.webp';
import espresso from '../assets/pictures/beverages/espresso.webp';
import cafeCreme from '../assets/pictures/beverages/cafe_creme.webp';
import cappuccino from '../assets/pictures/beverages/cappuccino.webp';
import latte from '../assets/pictures/beverages/latte.webp';
import mocha from '../assets/pictures/beverages/mocha.webp';
import chocolatChaud from '../assets/pictures/beverages/chocolat_chaud.webp';
import theALaMenthe from '../assets/pictures/beverages/the_a_la_menthe.webp';
import theEarlGrey from '../assets/pictures/beverages/the_earl_grey.webp';
import theVert from '../assets/pictures/beverages/the_vert.webp';

export const beverageMenu = [
    {
        name: "Café au Lait",
        description: "Rich espresso with steamed milk.",
        ingredients: ["espresso", "steamed milk"],
        cost: "$4.00",
        calories: 120,
        imagePath: cafeAuLait,
    },
    {
        name: "Espresso",
        description: "Bold and concentrated shot of coffee.",
        ingredients: ["espresso"],
        cost: "$3.00",
        calories: 5,
        imagePath: espresso,
    },
    {
        name: "Café Crème",
        description: "Espresso with creamy, frothy milk.",
        ingredients: ["espresso", "foamed milk"],
        cost: "$4.50",
        calories: 150,
        imagePath: cafeCreme,
    },
    {
        name: "Cappuccino",
        description: "Classic Italian coffee with foamed milk.",
        ingredients: ["espresso", "steamed milk", "foam"],
        cost: "$4.50",
        calories: 140,
        imagePath: cappuccino,
    },
    {
        name: "Latte",
        description: "Smooth espresso with steamed milk and light foam.",
        ingredients: ["espresso", "steamed milk", "foam"],
        cost: "$4.50",
        calories: 180,
        imagePath: latte,
    },
    {
        name: "Mocha",
        description: "Chocolatey coffee with steamed milk and whipped cream.",
        ingredients: ["espresso", "steamed milk", "chocolate", "whipped cream"],
        cost: "$5.00",
        calories: 250,
        imagePath: mocha,
    },
    {
        name: "Chocolat Chaud",
        description: "Rich, creamy French-style hot chocolate.",
        ingredients: ["dark chocolate", "milk", "cream", "sugar"],
        cost: "$4.50",
        calories: 300,
        imagePath: chocolatChaud,
    },
    {
        name: "Thé à la Menthe",
        description: "Refreshing mint tea with a hint of sweetness.",
        ingredients: ["mint leaves", "hot water", "sugar"],
        cost: "$3.50",
        calories: 30,
        imagePath: theALaMenthe,
    },
    {
        name: "Thé Earl Grey",
        description: "Classic black tea with bergamot aroma.",
        ingredients: ["black tea", "bergamot"],
        cost: "$3.00",
        calories: 0,
        imagePath: theEarlGrey,
    },
    {
        name: "Thé Vert",
        description: "Delicate and soothing green tea.",
        ingredients: ["green tea leaves"],
        cost: "$3.00",
        calories: 0,
        imagePath: theVert,
    },
];
