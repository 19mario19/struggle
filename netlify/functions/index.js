import dotenv from 'dotenv';
import express from 'express';
import serverless from 'serverless-http';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Netlify Functions!',
        status: 'success'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

export const handler = serverless(app);
