import express from 'express';
import { getPerson, getMovie, getTv, getHistory, deleteItemFromHistory } from '../controllers/search.controller.js';

const router = express.Router();

router.get("/person/:query", getPerson);
router.get("/movie/:query", getMovie);
router.get("/tv/:query", getTv);
router.get("/history", getHistory);
router.delete("/history/:id", deleteItemFromHistory);


export default router;