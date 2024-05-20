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
    name: String,
    price: Number,
    description: String,
});

const Product = mongoose.model('Product', productSchema);

// Ví dụ về một route để lấy danh sách products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
