const express = require('express')
const app = express();
const cors = require('cors')
const products = require('./routes/products')

app.use(cors());
app.use(express.json());
app.use('/api/products', products);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}`)
})