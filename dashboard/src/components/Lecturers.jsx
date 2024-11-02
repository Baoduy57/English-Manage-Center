import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import ChatBox from "./ChatBox";
const Lecturers = () => {
  const [lecturers, setLecturers] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const {
          data,
        } = await axios.get("http://localhost:4000/api/v1/user/lecturers", {
          withCredentials: true,
        });
        setLecturers(data.lecturers);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchLecturers();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page doctors">
      <h1>GIẢNG VIÊN</h1>
      <div className="banner">
        {lecturers && lecturers.length > 0 ? (
          lecturers.map((element) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="card">
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="lecturer avatar"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Số điện thoại: <span>{element.phone}</span>
                  </p>
                  <p>
                    Ngày sinh: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Chuyên ngành: <span>{element.lecturerMajor}</span>
                  </p>
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Giới tính: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Không tìm thấy giảng viên đã đăng ký!</h1>
        )}
      </div>
      <ChatBox />
    </section>
  );
};

export default Lecturers;
