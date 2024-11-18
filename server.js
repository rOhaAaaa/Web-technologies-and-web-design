const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'src/images')));


const products = [
    {
        id: 1,
        name: 'Foundation',
        description: 'A natural shade for a flawless skin tone that hydrates.',
        price: 300,
        image: `http://localhost:3000/images/foundation.jpg`,
        type: 'Makeup',
    },
    {
        id: 2,
        name: 'Mascara',
        description: 'Adds volume and length to lashes for a dramatic look.',
        price: 150,
        image: 'http://localhost:3000/images/mascara.jpg',
        type: 'Makeup'
    },
    {
        id: 3,
        name: 'Bronzer',
        description: 'Adds a natural glow to contour and highlight cheekbones.',
        price: 500,
        image: 'http://localhost:3000/images/bronzer.jpg',
        type: 'Makeup'
    },
    {
        id: 4,
        name: 'Blush',
        description: 'A fresh blush that adds brightness and a healthy look to the face.',
        price: 100,
        image: 'http://localhost:3000/images/blush.jpg',
        type: 'Makeup'
    },
    {
        id: 5,
        name: 'Lip oil',
        description: 'Moisturizes and nourishes the lips, leaving a light glowing effect.',
        price: 250,
        image: 'http://localhost:3000/images/oil.jpg',
        type: 'Lip Care'
    },
    {
        id: 6,
        name: 'Lip gloss',
        description: 'Lip gloss with a moisturizing effect that adds soft shine and care.',
        price: 200,
        image: 'http://localhost:3000/images/gloss.jpg',
        type: 'Lip Care'
    },
    {
        id: 7,
        name: 'Highlighter',
        description: 'Adds a natural feel to the skin, enhancing the contours.',
        price: 350,
        image: 'http://localhost:3000/images/highlighter.jpg',
        type: 'Makeup'
    },
    {
        id: 8,
        name: 'Concealer',
        description: 'Safely covers dark stains, stains and imperfections in the skin.',
        price: 280,
        image: 'http://localhost:3000/images/concealer.jpg',
        type: 'Makeup'
    },
    {
        id: 9,
        name: 'Cream',
        description: 'A nourishing face cream that deeply hydrates and protects the skin.',
        price: 345,
        image: 'http://localhost:3000/images/cream.jpg',
        type: 'Skincare'
    },
    {
        id: 10,
        name: 'Powder',
        description: 'A lightweight setting powder that controls shine and gives a matte finish for long-lasting makeup.',
        price: 475,
        image: 'http://localhost:3000/images/pudra.jpg',
        type: 'Skincare'
    },
    {
        id: 11,
        name: 'Highlighter',
        description: 'A radiant highlighter that enhances your skins natural glow and accentuates facial contours.',
        price: 500,
        image: 'http://localhost:3000/images/highlighter2.jpg',
        type: 'Makeup'
    },
    {
        id: 12,
        name: 'Mascara',
        description: 'A volumizing mascara that adds length and thickness to your lashes for a bold, dramatic look.',
        price: 185,
        image: 'http://localhost:3000/images/mascara2.jpg',
        type: 'Makeup'
    },
    {
        id: 13,
        name: 'Lip balm',
        description: 'A moisturizing lip balm that softens and nourishes lips, leaving a subtle sheen.',
        price: 225,
        image: 'http://localhost:3000/images/lipbalm.jpg',
        type: 'Lip Care'
    },
    {
        id: 14,
        name: 'Perfume',
        description: 'A fresh and floral fragrance that embodies elegance and sophistication for everyday wear.',
        price: 1000,
        image: 'http://localhost:3000/images/perfume.jpg',
        type: 'Perfumes'
    },
    {
        id: 15,
        name: 'Perfume',
        description: 'A rich and musky scent with warm undertones, perfect for evening occasions.',
        price: 1500,
        image: 'http://localhost:3000/images/perfume2.jpg',
        type: 'Perfumes'
    },
    {
        id: 16,
        name: 'Perfume',
        description: 'A vibrant, fruity fragrance with a burst of citrus, ideal for a refreshing day out.',
        price: 1850,
        image: 'http://localhost:3000/images/perfume3.jpg',
        type: 'Perfumes'
    },
    {
        id: 17,
        name: 'Perfume',
        description: 'A sensual, woody perfume that combines deep earthy notes with a hint of sweetness.',
        price: 2000,
        image: 'http://localhost:3000/images/perfume4.jpg',
        type: 'Perfumes'
    },
    {
        id: 18,
        name: 'Foundation',
        description: 'A full-coverage foundation that evens out skin tone while providing a flawless, natural finish.',
        price: 210,
        image: 'http://localhost:3000/images/foundation2.jpg',
        type: 'Makeup'
    },
    {
        id: 19,
        name: 'Lipstick',
        description: 'A creamy, long-lasting lipstick that delivers rich color and hydration for a smooth, bold look.',
        price: 195,
        image: 'http://localhost:3000/images/lipstick2.jpg',
        type: 'Makeup'
    },
    {
        id: 20,
        name: 'Eyeshadow',
        description: 'A versatile eyeshadow palette with a range of shades to create both subtle and bold eye looks.',
        price: 95,
        image: 'http://localhost:3000/images/eyeshadow.jpg',
        type: 'Makeup'
    },
];

app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.get('/catalog', (req, res) => {
    let filteredProducts = products;

    const { type, minPrice, maxPrice, search } = req.query;

    if (type && type !== 'All') {
        filteredProducts = filteredProducts.filter(product => product.type === type);
    }

    if (minPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= +minPrice);
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= +maxPrice);
    }

    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.json(filteredProducts);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});