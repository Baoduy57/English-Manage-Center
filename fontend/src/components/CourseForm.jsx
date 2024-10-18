import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const CourseForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [courseDate, setCourseDate] = useState("");
  const [major, setMajor] = useState("Tiếng Anh Giao Tiếp");
  const [lecturerFirstName, setLecturerFirstName] = useState("");
  const [lecturerLastName, setLecturerLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

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

  const [lecturers, setLecturers] = useState([]);
  useEffect(() => {
    const fetchLecturers = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/lecturers",
        { withCredentials: true }
      );
      setLecturers(data.lecturers);
      // console.log(data.lecturers);
    };
    fetchLecturers();
  }, []);
  const handleCourse = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/course/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          course_date: courseDate,
          major,
          lecturer_firstName: lecturerFirstName,
          lecturer_lastName: lecturerLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setNic(""),
        setDob(""),
        setGender(""),
        setCourseDate(""),
        setMajor(""),
        setLecturerFirstName(""),
        setLecturerLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Khóa học</h2>
        <form onSubmit={handleCourse}>
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
          </div>
          <div>
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
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Ngày sinh"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Chọn giới tính</option>
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
            </select>
            <input
              type="date"
              placeholder="Ngày đăng ký khóa học"
              value={courseDate}
              onChange={(e) => setCourseDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={major}
              onChange={(e) => {
                setMajor(e.target.value);
                setLecturerFirstName("");
                setLecturerLastName("");
              }}
            >
              {majorsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
            <select
              value={`${lecturerFirstName} ${lecturerLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setLecturerFirstName(firstName);
                setLecturerLastName(lastName);
              }}
              disabled={!major}
            >
              <option value="">Chọn Giảng viên</option>
              {lecturers
                .filter((lecturer) => lecturer.lecturerMajor === major)
                .map((lecturer, index) => {
                  return (
                    <option
                      value={`${lecturer.firstName} ${lecturer.lastName}`}
                      key={index}
                    >
                      {lecturer.firstName} {lecturer.lastName}
                    </option>
                  );
                })}
            </select>
          </div>
          <textarea
            rows="10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Địa chỉ"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>
              Bạn đã từng ghé thăm trước đây chưa?
            </p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>ĐẶT KHÓA HỌC</button>
        </form>
      </div>
    </>
  );
};

export default CourseForm;
