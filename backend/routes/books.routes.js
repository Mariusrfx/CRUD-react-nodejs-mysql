import { Router } from "express";
import { getBooks, postBooks } from "../controllers/books.controller.js";

const router = Router();

router.get('/books',getBooks);
router.post('/books',postBooks);

export default router;