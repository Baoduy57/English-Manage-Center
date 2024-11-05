// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ChatBot from "../components/ChatBot";

const SalaryAndFeeManagement = () => {
  const { isAuthenticated } = useContext(Context); // Keep only isAuthenticated

  const [teacherId, setTeacherId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [salaryAmount, setSalaryAmount] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  const navigateTo = useNavigate();

  const handleAddSalaryAndFee = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/salary-and-fee/add",
          {
            teacherId,
            studentId,
            salaryAmount,
            feeAmount,
            paymentDate,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          navigateTo("/");
          setTeacherId("");
          setStudentId("");
          setSalaryAmount("");
          setFeeAmount("");
          setPaymentDate("");
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
      <section className="container form-component salary-fee-form">
        <img
          style={{ width: "30%" }}
          src="/logo1.png"
          alt="logo"
          className="logo"
        />
        <h1 className="form-title">QUẢN LÝ LƯƠNG VÀ HỌC PHÍ</h1>
        <form onSubmit={handleAddSalaryAndFee}>
          <div className="input-group">
            <input
              type="text"
              placeholder="ID Giáo viên"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="ID Học sinh"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              placeholder="Số tiền lương"
              value={salaryAmount}
              onChange={(e) => setSalaryAmount(e.target.value)}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Số tiền học phí"
              value={feeAmount}
              onChange={(e) => setFeeAmount(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              placeholder="Ngày thanh toán"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="input-field"
            />
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="submit-button">
              THÊM LƯƠNG VÀ HỌC PHÍ
            </button>
          </div>
        </form>
      </section>
      <ChatBot />
    </section>
  );
};

export default SalaryAndFeeManagement;
