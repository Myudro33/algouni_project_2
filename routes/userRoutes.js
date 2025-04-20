import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  signIn,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);
router.route("/signin").post(signIn);

export default router;
