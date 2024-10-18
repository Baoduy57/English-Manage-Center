// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/course/getall",
          { withCredentials: true }
        );
        setCourses(data.courses);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setCourses([]);
      }
    };
    fetchCourses();
  }, []);

  const handleUpdateStatus = async (courseId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/course/update/${courseId}`,
        { status },
        { withCredentials: true }
      );
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course._id === courseId ? { ...course, status } : course
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc1.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Xin chào ,</p>
                <h5>{admin && `${admin.firstName} ${admin.lastName}`} </h5>
              </div>
              <p>
                Chào mừng đến với EnglishManageCenter, nền tảng quản lý trung
                tâm tiếng Anh tiên tiến, được thiết kế để đáp ứng những thách
                thức và nhu cầu của giáo dục ngôn ngữ trong thời đại số.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Tổng số khóa học</p>
            <h3>Trên 1500</h3>
          </div>
          <div className="thirdBox">
            <p>Giảng viên đã đăng ký</p>
            <h3>10</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Các khóa học</h5>
          <table>
            <thead>
              <tr>
                <th>Sinh viên</th>
                <th>Ngày</th>
                <th>Giảng viên</th>
                <th>Chuyên ngành</th>
                <th>Tình trạng</th>
                <th>Đã ghé thăm</th>
              </tr>
            </thead>
            <tbody>
              {courses && courses.length > 0
                ? courses.map((course) => (
                    <tr key={course._id}>
                      <td>{`${course.firstName} ${course.lastName}`}</td>
                      <td>{course.course_date.substring(0, 16)}</td>
                      <td>{`${course.lecturer.firstName} ${course.lecturer.lastName}`}</td>
                      <td>{course.major}</td>
                      <td>
                        <select
                          className={
                            course.status === "Pending"
                              ? "value-pending"
                              : course.status === "Accepted"
                              ? "value-accepted"
                              : "value-rejected"
                          }
                          value={course.status}
                          onChange={(e) =>
                            handleUpdateStatus(course._id, e.target.value)
                          }
                        >
                          <option value="Pending" className="value-pending">
                            Pending
                          </option>
                          <option value="Accepted" className="value-accepted">
                            Accepted
                          </option>
                          <option value="Rejected" className="value-rejected">
                            Rejected
                          </option>
                        </select>
                      </td>
                      <td>
                        {course.hasVisited === true ? (
                          <GoCheckCircleFill className="green" />
                        ) : (
                          <AiFillCloseCircle className="red" />
                        )}
                      </td>
                    </tr>
                  ))
                : "Không tìm thấy khóa học nào!"}
            </tbody>
          </table>

          {}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
