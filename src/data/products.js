import cap from '../../public/images/cap.jpg'
import jeans from '../../public/images/jean.jpg';
import tshirt from '../../public/images/T-shirt.jpg';
import glasses from '../../public/images/sunglasses.jpg';

export const PRODUCTS = [
    {
        id: 1,
        productName: "",
        price: 25,
        productImage: "images/cap.jpg",
        quantity: 50,
    },
    {
        id: 2,
        productName: 'jeans',
        price: 70, // Corrigé ici (Price -> price)
        productImage: 'images/jean.jpg',
        quantity: 50,
    },
    {
        id: 3,
        productName: 'tshirt',
        price: 29,
        productImage: "images/T-shirt.jpg",
        quantity: 50,
    },
    {
        id: 4,
        productName: 'glasses',
        price: 49,
        productImage: "images/sunglasses.jpg",
        quantity: 50,
    },
];