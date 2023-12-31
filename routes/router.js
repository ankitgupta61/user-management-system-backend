import express from "express";
import { postUserData, getUsers, getSpecificUser,editSpecificUser, deleteSpecificUser,testingServer } from "../controllers/user-controller.js";

const router = express.Router();

router.route('/').get(testingServer);
router.route('/add').post(postUserData);
router.route('/all').get(getUsers);
router.route('/:id').get(getSpecificUser);
router.route('/edit/:id').post(editSpecificUser);
router.route('/delete/:id').delete(deleteSpecificUser);
export default router;