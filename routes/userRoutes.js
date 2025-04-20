import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  signIn,
} from "../controllers/userController.js";
import { auth, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router
  .route("/")
  .get(auth, isAdmin, getAllUsers)
  .post(auth, isAdmin, createUser);
router
  .route("/:id")
  .put(auth, isAdmin, updateUser)
  .delete(auth, deleteUser, deleteUser);
router.route("/signin").post(signIn);

export default router;
