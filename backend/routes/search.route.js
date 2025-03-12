import express from 'express';
import { getPerson, getMovie, getTv } from '../controllers/search.controller.js';

const router = express.Router();

router.get("/person/:query", getPerson);
router.get("/movie/:query", getMovie);
router.get("/tv/:query", getTv);


export default router;