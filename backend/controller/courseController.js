import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Course } from "../models/courseSchema.js";
import { User } from "../models/userSchema.js";

export const postCourse = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    course_date,
    major,
    lecturer_firstName,
    lecturer_lastName,
    hasVisited,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !course_date ||
    !major ||
    !lecturer_firstName ||
    !lecturer_lastName ||
    !address
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const isConflict = await User.find({
    firstName: lecturer_firstName,
    lastName: lecturer_lastName,
    role: "Lecturer",
    lecturerMajor: major,
  });
  if (isConflict.length === 0) {
    return next(new ErrorHandler("Lecturer not found", 404));
  }

  if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Lecturers Conflict! Please Contact Through Email Or Phone!",
        404
      )
    );
  }

  const lecturerId = isConflict[0]._id;
  const studentId = req.user._id;
  const course = await Course.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    course_date,
    major,
    lecturer: {
      firstName: lecturer_firstName,
      lastName: lecturer_lastName,
    },
    hasVisited,
    address,
    lecturerId,
    studentId,
  });
  res.status(200).json({
    success: true,
    course,
    message: "Course Send!",
  });
});

export const getAllCourses = catchAsyncErrors(async (req, res, next) => {
  const courses = await Course.find();
  res.status(200).json({
    success: true,
    courses,
  });
});
export const updateCourseStatus = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let course = await Course.findById(id);
  if (!course) {
    return next(new ErrorHandler("Course not found!", 404));
  }
  course = await Course.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Course Status Updated!",
    course,
  });
});
export const deleteCourse = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) {
    return next(new ErrorHandler("Course Not Found!", 404));
  }
  await course.deleteOne();
  res.status(200).json({
    success: true,
    message: "Course Deleted!",
  });
});
