const express = require('express')
const router = express.Router();
const Joi = require('joi');

const products = [
    {
        "id": 1,
        "category": "vegetables",
        "imageUrl": "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
        "price": 10,
        "title": "Spinach"
    },
    {
        "id": 2,
        "category": "vegetables",
        "imageUrl": "https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg",
        "price": 2.5,
        "title": "Tomato"
    },
    {
        "id": 3,
        "category": "vegetables",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg",
        "price": 1,
        "title": "Lettuce"
    },
    {
        "id": 4,
        "category": "vegetables",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cauliflowers_-_20051021.jpg/1280px-Cauliflowers_-_20051021.jpg",
        "price": 1.75,
        "title": "Cauliflower"
    },
    {
        "id": 5,
        "category": "fruits",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1024px-Bananas.jpg",
        "price": 1.25,
        "title": "Banana"
    },
    {
        "id": 6,
        "category": "fruits",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
        "price": 1.7,
        "title": "Orange"
    },
    {
        "id": 7,
        "category": "fruits",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
        "price": 2,
        "title": "Apple"
    },
    {
        "id": 8,
        "category": "fruits",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg",
        "price": 2,
        "title": "Grape"
    },
    {
        "id": 9,
        "category": "fruits",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
        "price": 2,
        "title": "Peach"
    },

    {
        "id": 10,
        "category": "fruits",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg",
        "price": 1.95,
        "title": "Strawberry"
    },

]

router.get('/', (req, res) => {
    res.status(200).send(products);
})

router.post('/', (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const product = {
        "id": products.length + 1,
        "category": req.body.category,
        "imageUrl": req.body.imageUrl,
        "price": req.body.price,
        "title": req.body.title
    };
    products.push(product);
    res.status(201).send(product);
});

router.put('/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('The product with the given ID was not found.');

    const { error } = validateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    product.category = req.body.category,
    product.imageUrl = req.body.imageUrl,
    product.price = req.body.price,
    product.title = req.body.title

    res.send(product);
});

router.delete('/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('The product with the given ID was not found.');

    const index = products.indexOf(product);
    products.splice(index, 1);

    res.send(product);
});

router.get('/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('The product with the given ID was not found.');
    res.send(product);
});

function validateProduct(product) {
    const schema = {
        title: Joi.string().min(3).required(),
        imageUrl: Joi.string().required(),
        price: Joi.required(),
        category: Joi.required(),
    };

    return Joi.validate(product, schema);
}


module.exports = router;