import { Router } from "express";
import { getBooks, postBooks, updateBooks } from "../controllers/books.controller.js";

const router = Router();

router.get('/books',getBooks);
router.post('/books',postBooks);
router.patch('/books/:id',updateBooks);

export default router;