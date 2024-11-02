import croissant from '../assets/pictures/bakery/croissant.webp'
import painAuChocolat from '../assets/pictures/bakery/pain_au_chocolat.webp'
import baguette from '../assets/pictures/bakery/baguette.webp'
import eclair from '../assets/pictures/bakery/eclair.webp'
import macarons from '../assets/pictures/bakery/macarons.webp'
import tarteTatin from '../assets/pictures/bakery/tarte_tatin.webp'
import painAuxRaisins from '../assets/pictures/bakery/pain_aux_raisins.webp'
import milleFeuille from '../assets/pictures/bakery/mille_feuille.webp'
import madeleine from '../assets/pictures/bakery/madeleine.webp'
import canele from '../assets/pictures/bakery/canele.webp'
import financier from '../assets/pictures/bakery/financier.webp'
import tarteAuCitron from '../assets/pictures/bakery/tarte_au_citron.webp'


//Data for Bakery Menu
export const bakeryMenu = [
    {
        name: "Croissant",
        description: "Flaky, buttery pastry with golden layers.",
        ingredients: ["butter", "flour", "milk", "sugar", "yeast"],
        cost: "$3.50",
        calories: 250,
        imagePath: `${croissant}`,
    },
    {
        name: "Pain au Chocolat",
        description: "Classic pastry with rich chocolate filling.",
        ingredients: ["butter", "flour", "chocolate", "milk", "yeast"],
        cost: "$4.00",
        calories: 300,
        imagePath: painAuChocolat,
    },
    {
        name: "Baguette",
        description: "Crispy, golden crust with a soft interior.",
        ingredients: ["flour", "water", "yeast", "salt"],
        cost: "$2.50",
        calories: 180,
        imagePath: baguette,
    },
    {
        name: "Éclair",
        description: "Light choux pastry filled with vanilla cream.",
        ingredients: ["flour", "butter", "cream", "eggs", "sugar"],
        cost: "$4.50",
        calories: 260,
        imagePath: eclair,
    },
    {
        name: "Macarons",
        description: "Colorful almond cookies with ganache filling.",
        ingredients: ["almond flour", "sugar", "egg whites", "ganache"],
        cost: "$3.00",
        calories: 90,
        imagePath: macarons,
    },
    {
        name: "Tarte Tatin",
        description: "Caramelized apple tart with flaky pastry.",
        ingredients: ["apples", "sugar", "butter", "flour"],
        cost: "$5.00",
        calories: 320,
        imagePath: tarteTatin,
    },
    {
        name: "Pain aux Raisins",
        description: "Sweet pastry with raisins and custard.",
        ingredients: ["butter", "flour", "raisins", "custard", "yeast"],
        cost: "$4.00",
        calories: 280,
        imagePath: painAuxRaisins,
    },
    {
        name: "Mille-Feuille",
        description: "Layered puff pastry with cream filling.",
        ingredients: ["butter", "flour", "cream", "sugar"],
        cost: "$5.50",
        calories: 350,
        imagePath: milleFeuille,
    },
    {
        name: "Madeleine",
        description: "Soft, buttery shell-shaped sponge cake.",
        ingredients: ["butter", "flour", "sugar", "eggs", "lemon zest"],
        cost: "$2.00",
        calories: 90,
        imagePath: madeleine,
    },
    {
        name: "Canelé",
        description: "Caramelized crust with a custardy center.",
        ingredients: ["flour", "milk", "eggs", "sugar", "rum"],
        cost: "$3.00",
        calories: 130,
        imagePath: canele,
    },
    {
        name: "Financier",
        description: "Small almond cake with a hint of brown butter.",
        ingredients: ["almond flour", "butter", "sugar", "flour", "eggs"],
        cost: "$2.50",
        calories: 160,
        imagePath: financier,
    },
    {
        name: "Tarte au Citron",
        description: "Zesty lemon tart with a buttery crust.",
        ingredients: ["lemon", "butter", "sugar", "eggs", "flour"],
        cost: "$5.00",
        calories: 280,
        imagePath: tarteAuCitron,
    }
];