import express from 'express';
import * as dotenv from 'dotenv';


dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

export default router;
