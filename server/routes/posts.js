import express from 'express';
import { getPosts, ceratePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', ceratePost);

export default router;
