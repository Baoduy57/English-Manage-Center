import express from "express";
import {
  addNewAdmin,
  addNewLecturer,
  getAllLecturers,
  getUserDetails,
  login,
  logoutAdmin,
  logoutStudent,
  studentRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isStudentAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/student/register", studentRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.post("/lecturer/addnew", isAdminAuthenticated, addNewLecturer);
router.get("/lecturers", getAllLecturers);
router.get("/student/me", isStudentAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/student/logout", isStudentAuthenticated, logoutStudent);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;
