// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
import ChatBot from "../components/ChatBot";

const AddNewLecturer = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [lecturerMajor, setLecturerMajor] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const majorsArray = [
    "Tiếng Anh Giao Tiếp",
    "Tiếng Anh Học Thuật",
    "Tiếng Anh Thương Mại",
    "Luyện Thi IELTS/TOEFL",
    "Tiếng Anh Thiếu Nhi",
    "Tiếng Anh Thanh Thiếu Niên",
    "Khóa Học Tiếng Anh Online",
    "Tiếng Anh Du Lịch",
    "Tiếng Anh Phát Âm",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewLecturer = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("lecturerMajor", lecturerMajor);
      formData.append("docAvatar", docAvatar);
      await axios
        .post("http://localhost:4000/api/v1/user/lecturer/addnew", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page">
      <section className="container form-component add-doctor-form">
        <img
          style={{ width: "25%" }}
          src="/logo1.png"
          alt="logo"
          className="logo"
        />
        <h1 className="form-title">ĐĂNG KÝ GIẢNG VIÊN MỚI</h1>
        <form onSubmit={handleAddNewLecturer}>
          <div className="first-wrapper">
            <div style={{ flex: 1, flexDirection: "column" }}>
              <img
                src={docAvatarPreview ? `${docAvatarPreview}` : "/teacher1.png"}
                alt="Lecturer Avatar"
              />
              <input type="file" onChange={handleAvatar} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Tên"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Họ"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="number"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
              <input
                type={"date"}
                placeholder="Ngày sinh"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Chọn giới tính</option>
                <option value="Male">Nam</option>
                <option value="Female">Nữ</option>
              </select>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <select
                value={lecturerMajor}
                onChange={(e) => {
                  setLecturerMajor(e.target.value);
                }}
              >
                <option value="">Chọn chuyên ngành chính</option>
                {majorsArray.map((depart, index) => {
                  return (
                    <option value={depart} key={index}>
                      {depart}
                    </option>
                  );
                })}
              </select>
              <button type="submit">Đăng ký Giảng viên mới</button>
            </div>
          </div>
        </form>
      </section>
      <ChatBot />
    </section>
  );
};

export default AddNewLecturer;
