import express from 'express';
import { updateUser, creatUser, getUser, getUsers, deleteUser } from '../controllers/User.js';
const router = express.Router();

router.post("/", creatUser);
router.put("/:id", updateUser);
router.get("/:code", getUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);

export default router;