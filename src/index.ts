import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// impport routes
import authRoutes from './routes/auth.routes';
import projectRoutes from './routes/project.routes';

// Load configs
dotenv.config();

// defines express server
const app = express();

// global middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);

// starts express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
