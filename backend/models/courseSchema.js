import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";

const courseSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Is Required!"],
    minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },
  nic: {
    type: String,
    required: [true, "NIC Is Required!"],
    minLength: [13, "NIC Must Contain Only 13 Digits!"],
    maxLength: [13, "NIC Must Contain Only 13 Digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB Is Required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender Is Required!"],
    enum: ["Male", "Female"],
  },
  course_date: {
    type: String,
    required: [true, "Course Date Is Required!"],
  },
  major: {
    type: String,
    required: [true, "Major Name Is Required!"],
  },
  lecturer: {
    firstName: {
      type: String,
      required: [true, "Lecturer First Name Is Required!"],
    },
    lastName: {
      type: String,
      required: [true, "Lecturer Last Name Is Required!"],
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: [true, "Address Is Required!"],
  },
  lecturerId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Lecturer Id Is Invalid!"],
  },
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Student Id Is Required!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Course = mongoose.model("Course", courseSchema);
