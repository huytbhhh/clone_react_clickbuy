const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import thêm middleware CORS

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối với MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware để parse JSON
app.use(express.json());

// Sử dụng middleware CORS để cho phép các yêu cầu từ các nguồn khác
app.use(cors());

// Định nghĩa schema và model cho products
const productSchema = new mongoose.Schema({
    battery: String,
    capacity: String,
    current: String,
    name: String,
    type: String,
    price: String,
    img: String,
    category: String,
    color: String,
    infor: String,
    description: String,
});

const Product = mongoose.model('Product', productSchema);

// Route để lấy danh sách products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route để thêm một product mới
app.post('/api/products', async (req, res) => {
    const { current, name, type, price, img, category, color, infor, description,capacity,battery, } = req.body;
    
    // Create a new product
    const newProduct = new Product({
        battery,
        current,
        capacity,
        name,
        type,
        price,
        img,
        category,
        color,
        infor,
        description
    });

    try {
        // Save the product to the database
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Route để xóa một product
app.delete('/api/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        // Tìm và xóa sản phẩm dựa trên ID
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.get('/api/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        // Tìm sản phẩm dựa trên ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
