import { Router } from "express";
import { deleteBooks, getBooks, getBooksByid, postBooks, updateBooks } from "../controllers/books.controller.js";

const router = Router();

router.get('/books',getBooks);
router.get('/books/:id',getBooksByid);
router.post('/books',postBooks);
router.put('/books/:id',updateBooks);
router.delete('/books/:id',deleteBooks);

export default router;