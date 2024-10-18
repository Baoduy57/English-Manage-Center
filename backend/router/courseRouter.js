import express from "express";
import {
  deleteCourse,
  getAllCourses,
  postCourse,
  updateCourseStatus,
} from "../controller/courseController.js";
import {
  isAdminAuthenticated,
  isStudentAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isStudentAuthenticated, postCourse);
router.get("/getall", isAdminAuthenticated, getAllCourses);
router.put("/update/:id", isAdminAuthenticated, updateCourseStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteCourse);

export default router;
