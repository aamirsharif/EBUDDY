import express from 'express';
import userRoutes from '../routes/userRoutes';

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/users', userRoutes);

export default app;
