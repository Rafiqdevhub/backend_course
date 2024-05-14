const express = require('express');
const connectDB = require('./config/DBConnection');
const userRoutes = require('./routes/userRoute');
const contactRoutes= require('./routes/contactRoutes')

const errorHandler = require('./middleware/errorHandlering')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Connect DB
connectDB();



// Middleware
app.use(express.json());
app.use(cookieParser)

// Routes
app.use('/api', userRoutes);
app.use('/api/contact', contactRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
