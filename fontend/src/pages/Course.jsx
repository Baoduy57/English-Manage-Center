import Hero from "../components/Hero";
import CourseForm from "../components/CourseForm";
import ChatBox from "../components/ChatBox";
const Course = () => {
  return (
    <>
      <Hero
        title={"Lên lịch khóa học của bạn | EnglishManageCenter"}
        imageUrl={"/signin.png"}
      />
      <CourseForm />
      <ChatBox />
    </>
  );
};

export default Course;
